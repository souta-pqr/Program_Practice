if [ ${stage} -le 3 ] && [ ${stop_stage} -ge 3 ] && ! [[ " ${skip_stages} " =~ [[:space:]]3[[:space:]] ]]; then
    if "${skip_train}"; then
        if "${eval_valid_set}"; then
            _dsets="${valid_set} ${test_sets}"
        else
            _dsets="${test_sets}"
        fi
    else
        _dsets="${train_set} ${valid_set} ${test_sets}"
    fi
    if [ "${feats_type}" = raw ]; then
        log "Stage 3: Format wav.scp: data/ -> ${data_feats}"

        # ====== Recreating "wav.scp" ======
        # Kaldi-wav.scp, which can describe the file path with unix-pipe, like "cat /some/path |",
        # shouldn't be used in training process.
        # "format_wav_scp.sh" dumps such pipe-style-wav to real audio file
        # and it can also change the audio-format and sampling rate.
        # If nothing is need, then format_wav_scp.sh does nothing:
        # i.e. the input file format and rate is same as the output.

        for dset in ${_dsets}; do
            if [ "${dset}" = "${train_set}" ] || [ "${dset}" = "${valid_set}" ]; then
                _suf="/org"
            else
                _suf=""
            fi
            utils/copy_data_dir.sh --validate_opts --non-print data/"${dset}" "${data_feats}${_suf}/${dset}"
            rm -f ${data_feats}${_suf}/${dset}/{segments,wav.scp,reco2file_and_channel,reco2dur}
            
            # Copy isdysfl file if it exists
            if [ -f data/${dset}/isdysfl ]; then
                cp data/${dset}/isdysfl ${data_feats}${_suf}/${dset}/
            fi

            # Copy reference text files if there is more than 1 reference
            if [ ${#ref_text_files[@]} -gt 1 ]; then
                # shellcheck disable=SC2068
                for ref_txt in ${ref_text_files[@]}; do
                    [ -f data/${dset}/${ref_txt} ] && cp data/${dset}/${ref_txt} ${data_feats}${_suf}/${dset}
                done
            fi

            _opts=
            if [ -e data/"${dset}"/segments ]; then
                # "segments" is used for splitting wav files which are written in "wav".scp
                # into utterances. The file format of segments:
                #   <segment_id> <record_id> <start_time> <end_time>
                #   "e.g. call-861225-A-0050-0065 call-861225-A 5.0 6.5"
                # Where the time is written in seconds.
                _opts+="--segments data/${dset}/segments "
            fi
            # shellcheck disable=SC2086
            scripts/audio/format_wav_scp.sh --nj "${nj}" --cmd "${train_cmd}" \
                --audio-format "${audio_format}" --fs "${fs}" ${_opts} \
                --multi-columns-input "${multi_columns_input_wav_scp}" \
                --multi-columns-output "${multi_columns_output_wav_scp}" \
                "data/${dset}/wav.scp" "${data_feats}${_suf}/${dset}"

            echo "${feats_type}" > "${data_feats}${_suf}/${dset}/feats_type"
            if "${multi_columns_output_wav_scp}"; then
                echo "multi_${audio_format}" > "${data_feats}${_suf}/${dset}/audio_format"
            else
                echo "${audio_format}" > "${data_feats}${_suf}/${dset}/audio_format"
            fi
        done

    elif [ "${feats_type}" = raw_copy ]; then
        # If you guaranteed that the data already satisfy the raw format, you can skip format_wav_scp.py for reduce the overhead
        for dset in ${_dsets}; do
            if [ -e "data/${dset}/segments" ]; then
                log "Error: data/${dset}/segments is existing. Please use --feats_type raw"
                exit 1
            fi
            if [ "${dset}" = "${train_set}" ] || [ "${dset}" = "${valid_set}" ]; then
                _suf="/org"
            else
                _suf=""
            fi
            utils/copy_data_dir.sh --validate_opts --non-print data/"${dset}" "${data_feats}${_suf}/${dset}"
            
            # Copy isdysfl file if it exists
            if [ -f data/${dset}/isdysfl ]; then
                cp data/${dset}/isdysfl ${data_feats}${_suf}/${dset}/
            fi
            
            if [ "${dset}" = "${train_set}" ] || [ "${dset}" = "${valid_set}" ]; then
                _suf="/org"

                if [ -e "data/${dset}/utt2dur" ]; then
                    _fs=$(python3 -c "import humanfriendly as h;print(h.parse_size('${fs}'))")
                    <data/${dset}/utt2dur awk '{ print $1, int($2*'${_fs}'); }' > "${data_feats}${_suf}/${dset}"/utt2num_samples

                elif [ -e "data/${dset}/utt2num_samples" ]; then
                    cp "data/${dset}/utt2num_samples" "${data_feats}${_suf}/${dset}"/utt2num_samples

                else
                    log "Error: data/${dset}/utt2dur or data/${dset}/utt2num_samples must be existing for train_set and valid_set. Please use --feats_type raw. If you'd like to perform this script for evaluation, please give --skip_train true"
                    exit 1
                fi
            fi

            # Copy reference text files if there is more than 1 reference
            if [ ${#ref_text_files[@]} -gt 1 ]; then
                # shellcheck disable=SC2068
                for ref_txt in ${ref_text_files[@]}; do
                    [ -f data/${dset}/${ref_txt} ] && cp data/${dset}/${ref_txt} ${data_feats}${_suf}/${dset}
                done
            fi

            echo "raw" > "${data_feats}${_suf}/${dset}/feats_type"
            if "${multi_columns_input_wav_scp}"; then
                echo "multi_${audio_format}" > "${data_feats}${_suf}/${dset}/audio_format"
            else
                echo "${audio_format}" > "${data_feats}${_suf}/${dset}/audio_format"
            fi
        done

    elif [ "${feats_type}" = fbank_pitch ]; then
        log "[Require Kaldi] Stage 3: ${feats_type} extract: data/ -> ${data_feats}"

        for dset in ${_dsets}; do
            if [ "${dset}" = "${train_set}" ] || [ "${dset}" = "${valid_set}" ]; then
                _suf="/org"
            else
                _suf=""
            fi
            # 1. Copy datadir
            utils/copy_data_dir.sh --validate_opts --non-print data/"${dset}" "${data_feats}${_suf}/${dset}"
            
            # Copy isdysfl file if it exists
            if [ -f data/${dset}/isdysfl ]; then
                cp data/${dset}/isdysfl ${data_feats}${_suf}/${dset}/
            fi

            # Copy reference text files if there is more than 1 reference
            if [ ${#ref_text_files[@]} -gt 1 ]; then
                # shellcheck disable=SC2068
                for ref_txt in ${ref_text_files[@]}; do
                    [ -f data/${dset}/${ref_txt} ] && cp data/${dset}/${ref_txt} ${data_feats}${_suf}/${dset}
                done
            fi

            # 2. Feature extract
            _nj=$(min "${nj}" "$(<"${data_feats}${_suf}/${dset}/utt2spk" wc -l)")
            steps/make_fbank_pitch.sh --nj "${_nj}" --cmd "${train_cmd}" "${data_feats}${_suf}/${dset}"
            utils/fix_data_dir.sh "${data_feats}${_suf}/${dset}"

            # 3. Derive the the frame length and feature dimension
            scripts/feats/feat_to_shape.sh --nj "${_nj}" --cmd "${train_cmd}" \
                "${data_feats}${_suf}/${dset}/feats.scp" "${data_feats}${_suf}/${dset}/feats_shape"

            # 4. Write feats_dim
            head -n 1 "${data_feats}${_suf}/${dset}/feats_shape" | awk '{ print $2 }' \
                | cut -d, -f2 > ${data_feats}${_suf}/${dset}/feats_dim

            # 5. Write feats_type
            echo "${feats_type}" > "${data_feats}${_suf}/${dset}/feats_type"
        done

    elif [ "${feats_type}" = fbank ]; then
        log "Stage 3: ${feats_type} extract: data/ -> ${data_feats}"
        log "${feats_type} is not supported yet."
        exit 1

    elif  [ "${feats_type}" = extracted ]; then
        log "Stage 3: ${feats_type} extract: data/ -> ${data_feats}"
        # Assumming you don't have wav.scp, but feats.scp is created by local/data.sh instead.

        for dset in ${_dsets}; do
            if [ "${dset}" = "${train_set}" ] || [ "${dset}" = "${valid_set}" ]; then
                _suf="/org"
            else
                _suf=""
            fi
            # Generate dummy wav.scp to avoid error by copy_data_dir.sh
            if [ ! -f data/"${dset}"/wav.scp ]; then
                if [ ! -f data/"${dset}"/segments ]; then
                    <data/"${dset}"/feats.scp awk ' { print($1,"<DUMMY>") }' > data/"${dset}"/wav.scp
                else
                    <data/"${dset}"/segments awk ' { print($2,"<DUMMY>") }' > data/"${dset}"/wav.scp
                fi
            fi
            utils/copy_data_dir.sh --validate_opts --non-print data/"${dset}" "${data_feats}${_suf}/${dset}"
            
            # Copy isdysfl file if it exists
            if [ -f data/${dset}/isdysfl ]; then
                cp data/${dset}/isdysfl ${data_feats}${_suf}/${dset}/
            fi

            # Copy reference text files if there is more than 1 reference
            # shellcheck disable=SC2068
            if [ ${#ref_text_files[@]} -gt 1 ]; then
                for ref_txt in ${ref_text_files[@]}; do
                    [ -f data/${dset}/${ref_txt} ] && cp data/${dset}/${ref_txt} ${data_feats}${_suf}/${dset}
                done
            fi

            # Derive the the frame length and feature dimension
            _nj=$(min "${nj}" "$(<"${data_feats}${_suf}/${dset}/utt2spk" wc -l)")
            scripts/feats/feat_to_shape.sh --nj "${_nj}" --cmd "${train_cmd}" \
                "${data_feats}${_suf}/${dset}/feats.scp" "${data_feats}${_suf}/${dset}/feats_shape"

            pyscripts/feats/feat-to-shape.py "scp:head -n 1 ${data_feats}${_suf}/${dset}/feats.scp |" - | \
                awk '{ print $2 }' | cut -d, -f2 > "${data_feats}${_suf}/${dset}/feats_dim"

            echo "${feats_type}" > "${data_feats}${_suf}/${dset}/feats_type"
        done

    else
        log "Error: not supported: --feats_type ${feats_type}"
        exit 2
    fi
fi


if [ ${stage} -le 4 ] && [ ${stop_stage} -ge 4 ] && ! [[ " ${skip_stages} " =~ [[:space:]]4[[:space:]] ]]; then
    log "Stage 4: Remove long/short data: ${data_feats}/org -> ${data_feats}"

    # NOTE(kamo): Not applying to test_sets to keep original data
    for dset in "${train_set}" "${valid_set}"; do

        # Copy data dir
        utils/copy_data_dir.sh --validate_opts --non-print "${data_feats}/org/${dset}" "${data_feats}/${dset}"
        cp "${data_feats}/org/${dset}/feats_type" "${data_feats}/${dset}/feats_type"

        # Remove short utterances
        _feats_type="$(<${data_feats}/${dset}/feats_type)"
        if [ "${_feats_type}" = raw ]; then
            _fs=$(python3 -c "import humanfriendly as h;print(h.parse_size('${fs}'))")
            _min_length=$(python3 -c "print(int(${min_wav_duration} * ${_fs}))")
            _max_length=$(python3 -c "print(int(${max_wav_duration} * ${_fs}))")

            # utt2num_samples is created by format_wav_scp.sh
            <"${data_feats}/org/${dset}/utt2num_samples" \
                awk -v min_length="${_min_length}" -v max_length="${_max_length}" \
                    '{ if ($2 > min_length && $2 < max_length ) print $0; }' \
                    >"${data_feats}/${dset}/utt2num_samples"
            <"${data_feats}/org/${dset}/wav.scp" \
                utils/filter_scp.pl "${data_feats}/${dset}/utt2num_samples"  \
                >"${data_feats}/${dset}/wav.scp"
        else
            # Get frame shift in ms from conf/fbank.conf
            _frame_shift=
            if [ -f conf/fbank.conf ] && [ "$(<conf/fbank.conf grep -c frame-shift)" -gt 0 ]; then
                # Assume using conf/fbank.conf for feature extraction
                _frame_shift="$(<conf/fbank.conf grep frame-shift | sed -e 's/[-a-z =]*\([0-9]*\)/\1/g')"
            fi
            if [ -z "${_frame_shift}" ]; then
                # If not existing, use the default number in Kaldi (=10ms).
                # If you are using different number, you have to change the following value manually.
                _frame_shift=10
            fi

            _min_length=$(python3 -c "print(int(${min_wav_duration} / ${_frame_shift} * 1000))")
            _max_length=$(python3 -c "print(int(${max_wav_duration} / ${_frame_shift} * 1000))")

            cp "${data_feats}/org/${dset}/feats_dim" "${data_feats}/${dset}/feats_dim"
            <"${data_feats}/org/${dset}/feats_shape" awk -F, ' { print $1 } ' \
                | awk -v min_length="${_min_length}" -v max_length="${_max_length}" \
                    '{ if ($2 > min_length && $2 < max_length) print $0; }' \
                    >"${data_feats}/${dset}/feats_shape"
            <"${data_feats}/org/${dset}/feats.scp" \
                utils/filter_scp.pl "${data_feats}/${dset}/feats_shape"  \
                >"${data_feats}/${dset}/feats.scp"
        fi

        # Remove empty text
        # shellcheck disable=SC2068
        for ref_txt in ${ref_text_files[@]}; do
            <"${data_feats}/org/${dset}/${ref_txt}" \
                awk ' { if( NF != 1 ) print $0; } ' >"${data_feats}/${dset}/${ref_txt}"
        done

        # Process isdysfl file if it exists
        if [ -f "${data_feats}/org/${dset}/isdysfl" ]; then
            # Filter isdysfl based on valid utterances
            if [ "${_feats_type}" = raw ]; then
                # When using raw features, filter by utt2num_samples
                <"${data_feats}/org/${dset}/isdysfl" \
                    utils/filter_scp.pl "${data_feats}/${dset}/utt2num_samples" \
                    >"${data_feats}/${dset}/isdysfl.tmp"
            else
                # When using extracted features, filter by feats_shape
                <"${data_feats}/org/${dset}/isdysfl" \
                    utils/filter_scp.pl "${data_feats}/${dset}/feats_shape" \
                    >"${data_feats}/${dset}/isdysfl.tmp"
            fi
            
            # Check if each line has at least 2 fields (utterance ID and at least one label)
            <"${data_feats}/${dset}/isdysfl.tmp" \
                awk 'NF >= 2 {print $0}' >"${data_feats}/${dset}/isdysfl"
            
            rm "${data_feats}/${dset}/isdysfl.tmp"
        fi

        # fix_data_dir.sh leaves only utts which exist in all files
        utils/fix_data_dir.sh \
            ${ref_text_files_str:+--utt_extra_files "${ref_text_files_str} isdysfl"} \
            "${data_feats}/${dset}"
    done

    if [ -n "${post_process_local_data_opts}" ]; then
        # Backup text files and isdysfl before local/data.sh to preserve tags
        log "Backing up text files and isdysfl before local/data.sh to preserve tags"
        for dset in "${train_set}" "${valid_set}"; do
            # Backup text file
            if [ -f "${data_feats}/${dset}/text" ]; then
                cp "${data_feats}/${dset}/text" "${data_feats}/${dset}/text.with_tags.backup"
                log "Backed up text file for ${dset}"
            fi
            
            # Backup isdysfl file if exists
            if [ -f "${data_feats}/${dset}/isdysfl" ]; then
                cp "${data_feats}/${dset}/isdysfl" "${data_feats}/${dset}/isdysfl.with_tags.backup"
                log "Backed up isdysfl file for ${dset}"
            fi
            
            # Backup other reference text files if they exist
            if [ ${#ref_text_files[@]} -gt 1 ]; then
                # shellcheck disable=SC2068
                for ref_txt in ${ref_text_files[@]}; do
                    if [ -f "${data_feats}/${dset}/${ref_txt}" ]; then
                        cp "${data_feats}/${dset}/${ref_txt}" "${data_feats}/${dset}/${ref_txt}.with_tags.backup"
                        log "Backed up ${ref_txt} file for ${dset}"
                    fi
                done
            fi
        done
        
        # Do any additional local data post-processing here
        log "Running local/data.sh with options: ${post_process_local_data_opts}"
        local/data.sh ${post_process_local_data_opts} --asr_data_dir "${data_feats}/${train_set}"
        
        # Restore text files and isdysfl after local/data.sh to preserve tags
        log "Restoring text files and isdysfl after local/data.sh to preserve tags"
        for dset in "${train_set}" "${valid_set}"; do
            # Restore text file
            if [ -f "${data_feats}/${dset}/text.with_tags.backup" ]; then
                mv "${data_feats}/${dset}/text.with_tags.backup" "${data_feats}/${dset}/text"
                log "Restored text file with tags for ${dset}"
            fi
            
            # Restore isdysfl file if exists
            if [ -f "${data_feats}/${dset}/isdysfl.with_tags.backup" ]; then
                mv "${data_feats}/${dset}/isdysfl.with_tags.backup" "${data_feats}/${dset}/isdysfl"
                log "Restored isdysfl file with tags for ${dset}"
            fi
            
            # Restore other reference text files if they exist
            if [ ${#ref_text_files[@]} -gt 1 ]; then
                # shellcheck disable=SC2068
                for ref_txt in ${ref_text_files[@]}; do
                    if [ -f "${data_feats}/${dset}/${ref_txt}.with_tags.backup" ]; then
                        mv "${data_feats}/${dset}/${ref_txt}.with_tags.backup" "${data_feats}/${dset}/${ref_txt}"
                        log "Restored ${ref_txt} file with tags for ${dset}"
                    fi
                done
            fi
        done
    fi

    # shellcheck disable=SC2002,SC2068,SC2005
    for lm_txt in ${lm_train_text[@]}; do
        suffix=$(echo "$(basename ${lm_txt})" | sed 's/text//')
        <${lm_txt} awk -v suffix=${suffix} ' { if( NF != 1 ) {$1=$1 suffix; print $0; }} '
    done > "${data_feats}/lm_train.txt"
fi


if [ ${stage} -le 5 ] && [ ${stop_stage} -ge 5 ] && ! [[ " ${skip_stages} " =~ [[:space:]]5[[:space:]] ]]; then
    if [ "${token_type}" = bpe ]; then
        log "Stage 5: Generate token_list from ${bpe_train_text} using BPE"

        mkdir -p "${bpedir}"
        # shellcheck disable=SC2002
        cat ${bpe_train_text} | cut -f 2- -d" "  > "${bpedir}"/train.txt

        if [ -n "${bpe_nlsyms}" ]; then
            if test -f "${bpe_nlsyms}"; then
                bpe_nlsyms_list=$(awk '{print $1}' ${bpe_nlsyms} | paste -s -d, -)
                _opts_spm="--user_defined_symbols=${bpe_nlsyms_list}"
            else
                _opts_spm="--user_defined_symbols=${bpe_nlsyms}"
            fi
        else
            _opts_spm=""
        fi

        if ${sot_asr}; then
            # For SOT training, we add <sc> as an user-defined modeling unit.
            # The input text may be `text^1 <sc> text^2 <sc> text^3`, where `text^n`
            # refers to the transcription of `speaker n`.
            # The order of different texts is determined by their start times.
            _opts_spm+=" --user_defined_symbols=<sc>"
        fi

        spm_train \
            --input="${bpedir}"/train.txt \
            --vocab_size="${nbpe}" \
            --model_type="${bpemode}" \
            --model_prefix="${bpeprefix}" \
            --character_coverage=${bpe_char_cover} \
            --input_sentence_size="${bpe_input_sentence_size}" \
            ${_opts_spm}

        {
        echo "${blank}"
        echo "${oov}"
        # Remove <unk>, <s>, </s> from the vocabulary
        <"${bpeprefix}".vocab awk '{ if( NR != 1 && NR != 2 && NR != 3 ){ print $1; } }'
        echo "${sos_eos}"
        } > "${token_list}"

    elif [ "${token_type}" = char ] || [ "${token_type}" = word ]; then
        log "Stage 5: Generate character level token_list from ${lm_train_text}"

        _opts="--non_linguistic_symbols ${nlsyms_txt}"

        if ${sot_asr} && [ "${token_type}" = char ]; then
            # For SOT training, we add <sc> as an user-defined modeling unit.
            # The input text may be `text^1 <sc> text^2 <sc> text^3`, where `text^n`
            # refers to the transcription of `speaker n`.
            # The order of different texts is determined by their start times.
            _opts+=" --add_nonsplit_symbol <sc>:2 "
        fi

        # The first symbol in token_list must be "<blank>" and the last must be also sos/eos:
        # 0 is reserved for CTC-blank for ASR and also used as ignore-index in the other task
        ${python} -m espnet2.bin.tokenize_text  \
            --token_type "${token_type}" \
            --input "${data_feats}/lm_train.txt" --output "${token_list}" ${_opts} \
            --field 2- \
            --cleaner "${cleaner}" \
            --g2p "${g2p}" \
            --write_vocabulary true \
            --add_symbol "${blank}:0" \
            --add_symbol "${oov}:1" \
            --add_symbol "${sos_eos}:-1"

            # Duplicated <sc> token may be counted for char token type,
            # so we shoud remove it
            if ${sot_asr} && [ "${token_type}" = char ]; then
                cp ${token_list} ${token_list}".duplicated"
                awk '!seen[$0]++' ${token_list}".duplicated" > ${token_list}
                rm ${token_list}".duplicated"
            fi
    elif grep -q "whisper" <<< ${token_type}; then
        log "Stage 5: Generate whisper token_list from ${token_type} tokenizer"


        # The first symbol in token_list must be "<blank>" and the last must be also sos/eos:
        # 0 is reserved for CTC-blank for ASR and also used as ignore-index in the other task
        echo ${token_list}
        ${python} -m espnet2.bin.whisper_export_vocabulary  \
            --whisper_model "${token_type}" \
            --add_token_file_name "${nlsyms_txt}" \
            --whisper_language "${lang}" \
            --whisper_task "transcribe" \
            --sot_asr "${sot_asr}" \
            --output "${token_list}"

    elif [ "${token_type}" = hugging_face ]; then
        log "Stage 5: Generate hugging_face token_list from ${hugging_face_model_name_or_path}"

        if ${sot_asr}; then
            log "Error: not supported SOT training for hugging_face token_list"
            exit 2
        fi
        # The first symbol in token_list must be "<blank>" and the last must be also sos/eos:
        # 0 is reserved for CTC-blank for ASR and also used as ignore-index in the other task
        ${python} -m espnet2.bin.hugging_face_export_vocabulary  \
            --model_name_or_path "${hugging_face_model_name_or_path}" \
            --output "${token_list}"
    else
        log "Error: not supported --token_type '${token_type}'"
        exit 2
    fi

    # Create word-list for word-LM training
    if ${use_word_lm} && [ "${token_type}" != word ]; then
        log "Generate word level token_list from ${data_feats}/lm_train.txt"
        ${python} -m espnet2.bin.tokenize_text \
            --token_type word \
            --input "${data_feats}/lm_train.txt" --output "${lm_token_list}" \
            --field 2- \
            --cleaner "${cleaner}" \
            --g2p "${g2p}" \
            --write_vocabulary true \
            --vocabulary_size "${word_vocab_size}" \
            --add_symbol "${blank}:0" \
            --add_symbol "${oov}:1" \
            --add_symbol "${sos_eos}:-1"
    fi

fi
