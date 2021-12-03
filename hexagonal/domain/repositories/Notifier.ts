export interface Notifier {
  notify(data: any): Promise<void>
}