export default abstract class Beverage {
    public desc = "unknown"
    public getDescription(): string {
        return this.desc
    }
    public abstract cost(): number
}