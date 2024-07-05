#include <SDL2/SDL.h>
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>
#include <X11/Xlib.h>
#include <errno.h>

#define SCREEN_WIDTH 800
#define SCREEN_HEIGHT 600
#define MAX_BULLETS 100
#define MAX_ENEMIES 10

typedef struct {
    int x, y;
    int width, height;
} Entity;

Entity player;
Entity bullets[MAX_BULLETS];
Entity enemies[MAX_ENEMIES];
int bullet_count = 0;
int enemy_count = 0;

SDL_Window* window = NULL;
SDL_Renderer* renderer = NULL;
FILE* debug_file = NULL;

// Function prototypes
void debug_print(const char* message);
void sdl_error_print(const char* message);
void check_memory();
bool check_x11();
bool check_wsl_environment();
bool initialize_sdl();
bool create_window();
bool create_renderer();
bool initialize();
void close();
void handle_events(SDL_Event* e, bool* quit);
void update();
void render();

void debug_print(const char* message) {
    if (debug_file) {
        fprintf(debug_file, "DEBUG: %s\n", message);
        fflush(debug_file);
    }
    printf("DEBUG: %s\n", message);
    fflush(stdout);
}

void sdl_error_print(const char* message) {
    const char* error = SDL_GetError();
    if (debug_file) {
        fprintf(debug_file, "SDL ERROR: %s: %s\n", message, error);
        fflush(debug_file);
    }
    printf("SDL ERROR: %s: %s\n", message, error);
    fflush(stdout);
}

void check_memory() {
    char buffer[100];
    sprintf(buffer, "Memory usage: %zu bytes", SDL_GetBasePath() != NULL ? strlen(SDL_GetBasePath()) : 0);
    debug_print(buffer);
}

bool check_x11() {
    debug_print("Checking X11 connection");
    char *display_env = getenv("DISPLAY");
    if (!display_env) {
        debug_print("DISPLAY environment variable is not set");
        return false;
    }
    
    debug_print("Attempting to open X11 display");
    Display *display = XOpenDisplay(NULL);
    if (!display) {
        char error_msg[256];
        snprintf(error_msg, sizeof(error_msg), "Failed to open X11 display. Error: %s", strerror(errno));
        debug_print(error_msg);
        return false;
    }
    
    int screen = DefaultScreen(display);
    Window root = RootWindow(display, screen);
    
    char info_msg[256];
    snprintf(info_msg, sizeof(info_msg), "Successfully opened X11 display. Screen: %d, Root Window: %lu", screen, root);
    debug_print(info_msg);
    
    XCloseDisplay(display);
    return true;
}

bool check_wsl_environment() {
    debug_print("Checking for WSL environment");
    const char* wsl_env = getenv("WSL_DISTRO_NAME");
    if (wsl_env != NULL) {
        debug_print("Running in WSL environment");
        debug_print("Checking DISPLAY environment variable");
        const char* display_env = getenv("DISPLAY");
        if (display_env == NULL) {
            debug_print("DISPLAY environment variable is not set");
            return false;
        } else {
            char buffer[100];
            sprintf(buffer, "DISPLAY environment variable is set to: %s", display_env);
            debug_print(buffer);
        }
        
        debug_print("Checking SDL_VIDEODRIVER environment variable");
        const char* sdl_videodriver = getenv("SDL_VIDEODRIVER");
        if (sdl_videodriver == NULL) {
            debug_print("SDL_VIDEODRIVER is not set. Setting it to 'x11'");
            setenv("SDL_VIDEODRIVER", "x11", 1);
        } else {
            char buffer[100];
            sprintf(buffer, "SDL_VIDEODRIVER is set to: %s", sdl_videodriver);
            debug_print(buffer);
        }

        if (!check_x11()) {
            debug_print("X11 connection failed");
            return false;
        }
    } else {
        debug_print("Not running in WSL environment");
    }
    return true;
}

bool initialize_sdl() {
    debug_print("Initializing SDL");
    check_memory();
    
    if (SDL_Init(0) < 0) {
        sdl_error_print("SDL could not initialize");
        return false;
    }
    debug_print("SDL base system initialized successfully");

    debug_print("Initializing SDL Video");
    if (SDL_VideoInit(NULL) < 0) {
        sdl_error_print("SDL Video could not initialize");
        return false;
    }
    debug_print("SDL Video initialized successfully");

    if (SDL_InitSubSystem(SDL_INIT_EVENTS) < 0) {
        sdl_error_print("SDL Events Subsystem could not initialize");
        return false;
    }
    debug_print("SDL Events Subsystem initialized successfully");

    if (SDL_InitSubSystem(SDL_INIT_TIMER) < 0) {
        sdl_error_print("SDL Timer Subsystem could not initialize");
        return false;
    }
    debug_print("SDL Timer Subsystem initialized successfully");

    check_memory();
    debug_print("All SDL subsystems initialized successfully");
    return true;
}

bool create_window() {
    debug_print("Creating window");
    window = SDL_CreateWindow("2D Shooting Game", 
                              SDL_WINDOWPOS_UNDEFINED, SDL_WINDOWPOS_UNDEFINED, 
                              SCREEN_WIDTH, SCREEN_HEIGHT, 
                              SDL_WINDOW_SHOWN);
    if (window == NULL) {
        sdl_error_print("Window could not be created");
        return false;
    }
    debug_print("Window created successfully");
    return true;
}

bool create_renderer() {
    debug_print("Creating renderer");
    renderer = SDL_CreateRenderer(window, -1, SDL_RENDERER_ACCELERATED);
    if (renderer == NULL) {
        sdl_error_print("Renderer could not be created");
        return false;
    }
    debug_print("Renderer created successfully");
    return true;
}

bool initialize() {
    debug_print("Opening debug file");
    debug_file = fopen("debug_log.txt", "w");
    if (!debug_file) {
        printf("Failed to open debug file\n");
        return false;
    }
    debug_print("Debug file opened successfully");

    if (!check_wsl_environment()) return false;
    if (!initialize_sdl()) return false;
    if (!create_window()) return false;
    if (!create_renderer()) return false;

    debug_print("Initializing player");
    player.x = 100;
    player.y = 300;
    player.width = 50;
    player.height = 50;

    debug_print("Initializing random number generator");
    srand((unsigned int)time(NULL));

    debug_print("Initialization complete");
    return true;
}

void close() {
    debug_print("Closing game");
    if (renderer) {
        debug_print("Destroying renderer");
        SDL_DestroyRenderer(renderer);
        renderer = NULL;
    }
    if (window) {
        debug_print("Destroying window");
        SDL_DestroyWindow(window);
        window = NULL;
    }
    debug_print("Quitting SDL");
    SDL_VideoQuit();
    SDL_Quit();
    if (debug_file) {
        debug_print("Closing debug file");
        fclose(debug_file);
        debug_file = NULL;
    }
}

void handle_events(SDL_Event* e, bool* quit) {
    while (SDL_PollEvent(e) != 0) {
        if (e->type == SDL_QUIT) {
            debug_print("Quit event received");
            *quit = true;
        } else if (e->type == SDL_KEYDOWN) {
            switch (e->key.keysym.sym) {
                case SDLK_UP:
                    player.y = (player.y > 10) ? player.y - 10 : 0;
                    break;
                case SDLK_DOWN:
                    player.y = (player.y < SCREEN_HEIGHT - player.height - 10) ? player.y + 10 : SCREEN_HEIGHT - player.height;
                    break;
                case SDLK_SPACE:
                    if (bullet_count < MAX_BULLETS) {
                        bullets[bullet_count].x = player.x + player.width;
                        bullets[bullet_count].y = player.y + player.height / 2;
                        bullets[bullet_count].width = 10;
                        bullets[bullet_count].height = 5;
                        bullet_count++;
                        debug_print("Bullet fired");
                    }
                    break;
            }
        }
    }
}

void update() {
    // Move bullets
    for (int i = 0; i < bullet_count; i++) {
        bullets[i].x += 5;
        if (bullets[i].x > SCREEN_WIDTH) {
            bullets[i] = bullets[bullet_count - 1];
            bullet_count--;
            i--;
        }
    }

    // Move enemies
    for (int i = 0; i < enemy_count; i++) {
        enemies[i].x -= 2;
        if (enemies[i].x + enemies[i].width < 0) {
            enemies[i] = enemies[enemy_count - 1];
            enemy_count--;
            i--;
        }
    }

    // Spawn enemies
    if (enemy_count < MAX_ENEMIES && rand() % 100 < 2) {
        enemies[enemy_count].x = SCREEN_WIDTH;
        enemies[enemy_count].y = rand() % (SCREEN_HEIGHT - 50);
        enemies[enemy_count].width = 50;
        enemies[enemy_count].height = 50;
        enemy_count++;
        debug_print("Enemy spawned");
    }

    // Check collisions
    for (int i = 0; i < bullet_count; i++) {
        for (int j = 0; j < enemy_count; j++) {
            if (bullets[i].x < enemies[j].x + enemies[j].width &&
                bullets[i].x + bullets[i].width > enemies[j].x &&
                bullets[i].y < enemies[j].y + enemies[j].height &&
                bullets[i].y + bullets[i].height > enemies[j].y) {
                bullets[i] = bullets[bullet_count - 1];
                bullet_count--;
                i--;
                enemies[j] = enemies[enemy_count - 1];
                enemy_count--;
                debug_print("Collision detected");
                break;
            }
        }
    }
}

void render() {
    SDL_SetRenderDrawColor(renderer, 255, 255, 255, 255);
    SDL_RenderClear(renderer);

    // Render player
    SDL_SetRenderDrawColor(renderer, 0, 0, 255, 255);
    SDL_Rect player_rect = {player.x, player.y, player.width, player.height};
    SDL_RenderFillRect(renderer, &player_rect);

    // Render bullets
    SDL_SetRenderDrawColor(renderer, 255, 0, 0, 255);
    for (int i = 0; i < bullet_count; i++) {
        SDL_Rect bullet_rect = {bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height};
        SDL_RenderFillRect(renderer, &bullet_rect);
    }

    // Render enemies
    SDL_SetRenderDrawColor(renderer, 0, 255, 0, 255);
    for (int i = 0; i < enemy_count; i++) {
        SDL_Rect enemy_rect = {enemies[i].x, enemies[i].y, enemies[i].width, enemies[i].height};
        SDL_RenderFillRect(renderer, &enemy_rect);
    }

    SDL_RenderPresent(renderer);
}

int main(int argc, char* args[]) {
    debug_print("Starting game");
    if (!initialize()) {
        printf("Failed to initialize!\n");
        close();
        return -1;
    }

    bool quit = false;
    SDL_Event e;

    debug_print("Entering main game loop");
    while (!quit) {
        handle_events(&e, &quit);
        update();
        render();
        SDL_Delay(16);  // Cap to ~60 FPS
    }

    debug_print("Exiting game");
    close();
    return 0;
}