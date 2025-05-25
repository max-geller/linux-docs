import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Linux Dev Environment",
  description: "Documentation site for my Linux Development Environment",
  base: "/linux-docs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Getting Started", link: "/nav/getting-started" },
      { text: "Keybindings", link: "/nav/cheat-sheet" },
      { text: "Resources", link: "/nav/resources" },
    ],
    sidebar: [
      {
        text: "Getting Started",
        link: "/nav/getting-started",
      },
      {
        text: "Essential Applications",
        link: "/nav/essential-apps",
      },
      {
        text: "Keybindings Cheat Sheet",
        link: "/nav/cheat-sheet",
      },
      {
        text: "Resources",
        link: "/nav/resources",
      },
      {
        text: "Hardware",
        items: [
          { text: "Build Specs", link: "/hardware/build" },
          { text: "Grub", link: "/hardware/grub" },
          { text: "Peripherals", link: "/hardware/peripherals" },
        ],
      },
      {
        text: "System Setup",
        items: [
          { text: "Linux Distribution", link: "system/linux" },
          { text: "Grub", link: "system/grub" },
          { text: "Hyprland", link: "system/hypr" },
          { text: "Waybar", link: "system/waybar" },
          { text: "Rofi", link: "system/rofi" },
          { text: "Notifications", link: "system/notifications" },
          { text: "Performance", link: "system/performance" },
          { text: "Fonts", link: "system/fonts" },
          { text: "Goodies", link: "system/goodies" },
        ],
      },
      {
        text: "Terminal",
        items: [
          { text: "Kitty", link: "/terminal/kitty" },
          { text: "Zsh", link: "/terminal/zsh" },
          { text: "Starship", link: "/terminal/starship" },
          { text: "NerdFonts", link: "/terminal/nerdfonts" },
        ],
      },
      {
        text: "Development IDE",
        items: [
          { text: "IDE Overview", link: "/ide/overview" },
          { text: "tmux", link: "/ide/tmux" },
          { text: "Neovim", link: "/ide/neovim" },
        ],
      },
      {
        text: "Development Workflow",
        items: [
          { text: "Folder Structure", link: "/workflow/structure" },
          { text: "Project Setup", link: "/workflow/setup" },
          { text: "Git Workflow", link: "/workflow/git" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
