import { GmailNotifier } from "./GmailNotifier";

export class UserDeleterGmailNotifier extends GmailNotifier {
  async notify(data: any): Promise<void> {
    this._transporter.sendMail({
      from: this._from,
      to: this._to,
      subject: `El usuario ${data.name} con ID ${data.id} fue eliminado correctamente`,
      html: `
        😔
        <h1>Lamentamos tu ida de la aplicación</h1>.
        <h6>Vuelve pronto 👏</h6>
      `
    })
  }
}