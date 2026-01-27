import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebarstudent',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebarstudent.component.html',
  styleUrl: './sidebarstudent.component.scss'
})
export class SidebarstudentComponent implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly breakpointObserver = inject(BreakpointObserver);

  // Sidebar state
  isScreenSmall = signal(false);
  isSidebarOpen = signal(false);
  
  // Theme state
  isDarkMode = signal(false);

  // Navigation items
  navItems = [
    { label: 'All Exams', route: '/student/exams', icon: 'assignment' },
    { label: 'Exam Results', route: '/student/results', icon: 'assessment' },
    { label: 'Profile', route: '/student/profile', icon: 'person' },
    { label: 'Settings', route: '/student/settings', icon: 'settings' }
  ];

  ngOnInit() {
    this.loadThemePreference();
    this.observeBreakpoints();
  }

  /**
   * Observe screen size changes using Angular CDK BreakpointObserver
   */
  private observeBreakpoints() {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe(result => {
        this.isScreenSmall.set(result.matches);
        
        // On large screens, sidebar is collapsed by default
        // On small screens, sidebar is closed by default
        if (!result.matches) {
          this.isSidebarOpen.set(false); // Collapsed on desktop
        } else {
          this.isSidebarOpen.set(false); // Closed on mobile
        }
      });
  }

  /**
   * Toggle sidebar open/close
   */
  toggleSidebar() {
    this.isSidebarOpen.update(value => !value);
  }

  /**
   * Close sidebar when navigation item is clicked (mobile only)
   */
  onNavItemClick() {
    if (this.isScreenSmall()) {
      this.isSidebarOpen.set(false);
    }
  }

  /**
   * Toggle between dark and light mode
   */
  toggleTheme() {
    this.isDarkMode.update(value => !value);
    this.applyTheme();
    this.saveThemePreference();
  }

  /**
   * Apply the current theme to the document
   */
  private applyTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const body = document.body;
      if (this.isDarkMode()) {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
      } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
      }
    }
  }

  /**
   * Save theme preference to localStorage
   */
  private saveThemePreference() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', this.isDarkMode() ? 'dark' : 'light');
    }
  }

  /**
   * Load theme preference from localStorage or system preference
   */
  private loadThemePreference() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      
      if (savedTheme) {
        this.isDarkMode.set(savedTheme === 'dark');
      } else {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.isDarkMode.set(prefersDark);
      }
      
      this.applyTheme();
    }
  }

  /**
   * Get sidebar mode based on screen size
   */
  getSidebarMode(): 'over' | 'side' {
    return this.isScreenSmall() ? 'over' : 'side';
  }
}
