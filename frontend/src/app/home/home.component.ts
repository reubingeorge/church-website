import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface HeroImage {
  url: string;
  alt: string;
}

interface Particle {
  x: number;
  y: number;
  delay: number;
  duration: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  currentImageIndex = 0;
  private imageInterval: any;
  
  heroImages: HeroImage[] = [
    {
      url: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=1920&h=1080&fit=crop',
      alt: 'Church Interior with Stained Glass'
    },
    {
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop',
      alt: 'Church Cross at Sunset'
    },
    {
      url: 'https://images.unsplash.com/photo-1601142634808-38923eb7c560?w=1920&h=1080&fit=crop',
      alt: 'Church Community Gathering'
    },
    {
      url: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1920&h=1080&fit=crop',
      alt: 'Candles and Prayer'
    },
    {
      url: 'https://images.unsplash.com/photo-1517448931760-9bf4414148c5?w=1920&h=1080&fit=crop',
      alt: 'Orthodox Church Architecture'
    }
  ];
  
  particles: Particle[] = [];
  
  ngOnInit() {
    // Generate floating particles
    this.generateParticles();
    
    // Start automatic image rotation
    this.startImageRotation();
  }
  
  ngOnDestroy() {
    if (this.imageInterval) {
      clearInterval(this.imageInterval);
    }
  }
  
  private generateParticles(): void {
    for (let i = 0; i < 30; i++) {
      this.particles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5000,
        duration: 15 + Math.random() * 20
      });
    }
  }
  
  private startImageRotation(): void {
    this.imageInterval = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.heroImages.length;
    }, 5000); // Change image every 5 seconds
  }
  
  setCurrentImage(index: number): void {
    this.currentImageIndex = index;
    // Reset the interval when user manually changes image
    if (this.imageInterval) {
      clearInterval(this.imageInterval);
      this.startImageRotation();
    }
  }
}