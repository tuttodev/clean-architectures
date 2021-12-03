import { GmailNotifier } from "./GmailNotifier";

export class UserCreatedGmailNotifier extends GmailNotifier {
  async notify(data: any): Promise<void> {
    this._transporter.sendMail({
      from: this._from,
      to: this._to,
      subject: `El usuario ${data.name} fue creado correctamente`,
      html: `
        <ul>
          <li>${data.name}</li>
          <li>${data.age}</li>
        </ul>
      `
    })
  }
}