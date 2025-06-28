class Logger {
  fontSize: string = "20px";
  backgroundColor: string = "#000";
  color: string = "#fff";
  padding: string = "20px";
  margin: string = "10px";
  border: string = "1px solid orange";
  borderRadius: string = "10px";

  log(message: string) {
    console.log(
      `%c${message}`,
      `font-size:${this.fontSize};background-color:${this.backgroundColor}; color:${this.color}; padding:${this.padding}; margin:${this.margin}; border:${this.border}; border-radius:${this.borderRadius};`
    );
  }

  bgColor(backgroundColor: string) {
    this.backgroundColor = backgroundColor
    return this
  }
  textColor(color: string) {
    this.color = color
    return this
  }
  fontSizeInPx(fontSize: string) {
    this.fontSize = fontSize
    return this
  }
  paddingInPx(padding: string) {
    this.padding = padding
    return this
  }
  marginInPx(margin: string) {
    this.margin = margin
    return this
  }
  borderInPx(border: string) {
    this.border = border
    return this
  }
  borderRadiusInPx(borderRadius: string) {
    this.borderRadius = borderRadius
    return this
  }
}

const logger = new Logger()
logger.bgColor("green").textColor("white").fontSizeInPx("30px").paddingInPx("20px").marginInPx("20px").borderInPx("1px solid white").borderRadiusInPx("10px").log("Maryam")