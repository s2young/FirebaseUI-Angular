import {ModuleWithProviders, NgModule} from '@angular/core';
import {FirebaseuiAngularLibraryComponent} from './firebaseui-angular-library.component';
import {CommonModule} from '@angular/common';
import {FirebaseUIAuthConfig} from './firebaseui-angular-library.helper';
import {FirebaseuiAngularLibraryService} from './firebaseui-angular-library.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [FirebaseuiAngularLibraryService],
  declarations: [FirebaseuiAngularLibraryComponent],
  exports: [FirebaseuiAngularLibraryComponent]
})
export class FirebaseUIModule {
  static forRoot(firebaseUiAuthConfig: FirebaseUIAuthConfig): ModuleWithProviders {
    return {
      ngModule: FirebaseUIModule,
      providers: [
        {provide: FirebaseUIAuthConfig, useValue: firebaseUiAuthConfig}
      ]
    };
  }
}
