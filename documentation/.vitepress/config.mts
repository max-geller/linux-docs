import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Linux Dev Environment",
  description: "Documentation site for my Linux Development Environment",
  base: "/docs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Setup Guide", link: "/setup/introduction" },
      { text: "Keybindings", link: "/keybindings" },
      { text: "Resources", link: "/resources" },
    ],
    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "Overview", link: "/introduction/overview" },
          { text: "Prerequisites", link: "/introduction/prerequisites" },
        ],
      },
      {
        text: "System Setup",
        items: [
          { text: "Linux Distribution", link: "setup/linux" },
          { text: "Hyprland", link: "" },
          { text: "Waybar", link: "" },
        ],
      },
      {
        text: "Development IDE",
        items: [
          { text: "Neovim Setup", link: "/ide/neovim" },
          { text: "Neovim Keybindings", link: "/ide/neovim-keybindings" },
        ],
      },
      {
        text: "Development Workflow",
        items: [
          { text: "Folder Structure", link: "/workflow/folder-structure" },
          { text: "Project Setup", link: "/workflow/project-setup" },
          { text: "Git Workflow", link: "/workflow/git" },
        ],
      },
      {
        text: "Tmux Setup",
        items: [
          { text: "Tmux Configuration", link: "/tmux/configuration" },
          { text: "Tmux Workflow", link: "/tmux/workflow" },
        ],
      },
      {
        text: "Essential Applications",
        link: "/apps",
      },
      {
        text: "Keybindings Cheat Sheet",
        link: "/keybindings",
      },
      {
        text: "Resources",
        link: "/nav/resources",
      },
      {
        text: "Troubleshooting",
        link: "/troubleshooting",
      },
      {
        text: "Terminal",
        items: [{ text: "Kitty", link: "/kitty" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
