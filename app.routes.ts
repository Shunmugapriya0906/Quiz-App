import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './question/question.component';

export const routes: Routes = [
    { path: "", redirectTo: "Login", pathMatch: "full" },
    { path: "Login", component: LoginComponent },
    { path: "Question", component: QuestionComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class app { }