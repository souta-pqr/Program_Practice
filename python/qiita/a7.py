import readline

def main():
    # Enable tab completion
    readline.parse_and_bind('tab: complete')
    
    # Get user input with history support
    print("Enter some text (Press Ctrl+D to exit):")
    try:
        while True:
            line = input('> ')
            print(f"You entered: {line}")
            
            # The input will automatically be added to history
            
    except EOFError:
        print("\nGoodbye!")

if __name__ == "__main__":
    main()