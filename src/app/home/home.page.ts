import { Component } from '@angular/core';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  constructor(private transfer: FileTransfer, private file: File ) {}

  download() {
    const fileTransfer: FileTransferObject = this.transfer.create();

    const url = 'https://cdn.images.express.co.uk/img/dynamic/130/590x/modern-gentleman-qualities-traits-manners-respectful-kind-polite-841392.jpg';
    fileTransfer.download(url, this.file.dataDirectory + 'example.jpg').then((entry) => {
      alert('download complete: ' + entry.toURL());
    }, (error) => {
      alert(error.message);
    });
  }

}
