import { gsap } from 'gsap';
import * as THREE from 'three';
import { SnowGroup } from './SnowGroup';

class App {
    constructor() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        this.renderer = new THREE.WebGLRenderer({
            canvas: DocumentFragment.getElementById('canvas'),
            antialias: true
        });
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setClearColor('#000000');

        this.camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
        this.camera.position.z = 3;

        this.group = new SnowGroup();

        this.light = new THREE.PointLight('#ffffff');
        this.light.position.x = 0.5;
        this.light.posittion.y = 0.5;
        this.light.position.z = 2.5;

        this.scene = new THREE.Scene();
        this.scene.add(this.group);
        this.scene.add(this.light);

        this.clock = new THREE.Clock();
        this.render();

        this.enter();
    }

    render() {
        const seconds = this.clock.getElapsedTime();
        this.group.rotation.y = seconds * Math.PI * 0.25;
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.render.bind(this));
    }

    enter() {
        const from = { x: 0, y: 0, z: 0 };
        const to = { x: 1, y: 1, z: 1, ease: 'back.out', duration: 1.5 };
        gsap.fromTo(this.group.scale, from, to);
    }
}

export { App };