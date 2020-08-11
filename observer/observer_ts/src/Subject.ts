import { Observer } from "./Observer";

export interface Subject {
    registerOberver(o: Observer): void
    removeObserver(o: Observer): void
    notifyObserver(): void
}
