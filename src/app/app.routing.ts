import { Routes, RouterModule } from '@angular/router';
import { WhiteBoardComponent } from "./white-board/white-board.component";
import {CourseViewerComponent} from "./course-viewer/course-viewer.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {WidgetListComponent} from "./widget-list/widget-list.component";
import {SectionComponent} from "./section/section.component";
import {SectionEditorComponent} from "./section-editor/section-editor.component";
import {EnrollmentComponent} from "./enrollment/enrollment.component";

const appRoutes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: WhiteBoardComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'course/:courseId', component: CourseViewerComponent },
  { path: 'course/:courseId/module/:moduleId', component: CourseViewerComponent },
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseViewerComponent },
  { path: 'widget/:topicId', component: WidgetListComponent },
  { path: 'course/:courseId/editSection/:sectionId', component: SectionEditorComponent },
  { path: 'course/:courseId/enrollment/:sectionId', component: EnrollmentComponent },
  { path: 'course/:courseId/section', component: SectionComponent},
  { path: '**', component: WhiteBoardComponent} // last
];
export const routing = RouterModule.forRoot(appRoutes);
