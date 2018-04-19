import { Component, Inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: "quiz",
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css']
})

export class QuizComponent {
    quiz: Quiz;

    constructor(private activateRoute: ActivatedRoute,
        private router: Router,
        private http: HttpClient) {

        // create an empty object from the Quiz interface
        this.quiz = <Quiz>{};

        var id = +this.activateRoute.snapshot.params["id"];
        console.log(id);
        if (id) {
            // TODO: load the quiz using server-side API
        }
        else {
            console.log("Invalid id: routing back to home...");
            this.router.navigate(["home"]);
        }
    }
}
