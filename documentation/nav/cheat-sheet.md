# Keybindings Cheat Sheet

## Window Management

The "MOD" key is the primary control for window management, workspace navigation, and launching applications

| Description                      | Shortcut           | Source    |
| -------------------------------- | ------------------ | --------- |
| Switch to Workspace [#]          | Mod + [#]          | Hyprland  |
| Open New Terminal Window         | Mod + Enter        | Hyprland  |
| App Launcher (Rofi)              | Mod + Space        | Hyprland  |
| Toggle Between Last 2 Workspaces | Mod + Tab          | Hyprland  |
| Restart Hyprland & Waybar        | Mod + Shift + R    | Hyprland  |
| Close Window                     | Mod + c            | Hyprland  |
| Move Windows                     | Mod + [Arrow keys] | Hyprland  |
| Change Wallpaper                 | Mod + w            | Hyprpaper |

## Terminal

| Description      | Shortcut            | Source |
| ---------------- | ------------------- | ------ |
| Change Font Size | CTRL + SHFT + [+/-] | Kitty  |

## TMUX

Tmux helps keep sessions and windows organized in the terminal. For example, while working on an Angular project, you may want several things at once:
1. A main tmux window/tab, for launching neovim.
2. A secondary tmux window/tab for running long-running services.
3. A pane within the 'main' tmux window at the bottom for running as-needed terminal commands (like "ng new xyz".)


The prefix for tmux operations is CTRL + a.

| Description                      | Shortcut                    | Source |
| -------------------------------- | --------------------------- | ------ |
| Create a new tmux window         | CTRL+a c                    | tmux   |
| Split Pane Vertically            | CTRL+a %                    | tmux   |
| Split Pane Horizontally          | CTRL+a "                    | tmux   |
| Resize Pane                      | CTRL+a CTRL + tap arrow key | tmux   |
| Navigate Between Panes           | CTRL+a o                    | tmux   |
| Navigate to Specific tmux Window | CTRL+a [#]                  | tmux   |
| Nativate to Next tmux Window     | CTRL+a n                    | tmux   |
| Naviage to Previous tmux Window  | CTRL+a p                    | tmux   |
| Close tmux Pane                  | CTRL+a x                    | tmux   |
| Close tmux Window                | CTRL+a &                    | tmux   |

## NeoVim

The leader key for my NeoVim setup is <Space>

| Description          | Shortcut | Plugin  |
| -------------------- | -------- | ------- |
| Toggle File Explorer | Mod + ee | NeoTree |
