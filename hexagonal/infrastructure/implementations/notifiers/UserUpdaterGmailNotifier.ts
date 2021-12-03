import { GmailNotifier } from "./GmailNotifier";

export class UserUpdaterGmailNotifier extends GmailNotifier {
  async notify(data: any): Promise<void> {
    this._transporter.sendMail({
      from: this._from,
      to: this._to,
      subject: `El usuario ${data.name} fue actualizado correctamente`,
      html: `<h3>Fue actualizado super</h3>`
    })
  }
}