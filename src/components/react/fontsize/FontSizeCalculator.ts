export class FontSizeCalculator {
  
  private fontSizeProperties: any = {};
  private fluidMinWidth: number;
  private fluidMaxWidth: number;
  private fluidScreen: string;
  private minBase: number;
  private maxBase: number;
  private growthFactor: number;
  private growthFactorForF5: number;

  constructor(
    fluidMinWidth: number,
    fluidMaxWidth: number,
    minBase: number,
    maxBase: number,
    growthFactor: number,
    growthFactorForF5: number
  ) {
    this.fluidMinWidth = fluidMinWidth;
    this.fluidMaxWidth = fluidMaxWidth;
    this.minBase = minBase;
    this.fluidScreen = '100vw';
    this.maxBase = maxBase;
    this.growthFactor = growthFactor;
    this.growthFactorForF5 = growthFactorForF5;
  }

  private calculateFontSizeProperties(): void {
    for (let step = 0; step <= 6; step++) {
      const minProperty = `--f-${step}-min`;
      const maxProperty = `--f-${step}-max`;

      this.fontSizeProperties[minProperty] = this.minBase.toFixed(2);
      this.fontSizeProperties[maxProperty] = this.maxBase.toFixed(2);

      // Update base values for the next step
      this.minBase *= this.growthFactor;
      this.maxBase *= this.growthFactor;
    }

    const f4Min = parseFloat(this.fontSizeProperties['--f-4-min']);
    const f5Min = (f4Min / this.growthFactorForF5).toFixed(2);
    this.fontSizeProperties['--f-5-min'] = f5Min;

    this.fontSizeProperties['--fluid-min-width'] = this.fluidMinWidth;
    this.fontSizeProperties['--fluid-max-width'] = this.fluidMaxWidth;
    this.fontSizeProperties['--fluid-screen'] = this.fluidScreen;
  }

  private generateCSSFontSizeProperties(): string {
    return Object.keys(this.fontSizeProperties)
      .map((property) => `${property}: ${this.fontSizeProperties[property]};`)
      .join('\n');
  }

  private generateSizesSteps(): string {
    return `
      --size-0: calc(((var(--f-0-min) / 16) * 1rem) + (var(--f-0-max) - var(--f-0-min)) * var(--fluid-bp));
      --size-1: calc(((var(--f-1-min) / 16) * 1rem) + (var(--f-1-max) - var(--f-1-min)) * var(--fluid-bp));
      --size-3: calc(((var(--f-3-min) / 16) * 1rem) + (var(--f-3-max) - var(--f-3-min)) * var(--fluid-bp));
      --size-4: calc(((var(--f-4-min) / 16) * 1rem) + (var(--f-4-max) - var(--f-4-min)) * var(--fluid-bp));
      --size-2: calc(((var(--f-2-min) / 16) * 1rem) + (var(--f-2-max) - var(--f-2-min)) * var(--fluid-bp));
      --size-5: calc(((var(--f-5-min) / 16) * 1rem) + (var(--f-5-max) - var(--f-5-min)) * var(--fluid-bp));
      --size-6: calc(((var(--f-6-min) / 16) * 1rem) + (var(--f-6-max) - var(--f-6-min)) * var(--fluid-bp));
      --size--1: calc(((var(--f--1-min) / 16) * 1rem) + (var(--f--1-max) - var(--f--1-min)) * var(--fluid-bp));
      --size--2: calc(((var(--f--2-min) / 16) * 1rem) + (var(--f--2-max) - var(--f--2-min)) * var(--fluid-bp));
    `;
  }

  public generateCSSRoot(): string {
    this.calculateFontSizeProperties();
    const cssFontSizeProperties = this.generateCSSFontSizeProperties();
    const sizesSteps = this.generateSizesSteps();

    return `:root {\n${cssFontSizeProperties}\n${sizesSteps}\n}`;
  }
}

