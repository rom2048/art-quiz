import type { Painting } from '../types/types';

export class DataService {
  private static instance: DataService;
  private paintings: Painting[] = [];

  private constructor() {}

  public static getInstance(): DataService {
    if (!DataService.instance) {
      DataService.instance = new DataService();
    }

    return DataService.instance;
  }

  public async loadPaintings(): Promise<Painting[]> {
    if (this.paintings.length > 0) {
      return this.paintings;
    }

    try {
      const response = await fetch('/data/paintings.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.paintings = await response.json();

      return this.paintings;
    } catch (error) {
      console.error('Failed to load paintings:', error);
      throw error;
    }
  }

  public getPaintings(): Painting[] {
    return this.paintings;
  }
}
