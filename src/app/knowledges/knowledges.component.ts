import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledges',
  templateUrl: './knowledges.component.html',
  styleUrls: ['./knowledges.component.scss']
})
export class KnowledgesComponent implements OnInit {

  tecnologies = [
    {
      img: 'assets/img/tecnology/angular.png',
      description: 'Angular'
    }, {
      img: 'assets/img/tecnology/sass.png',
      description: 'SASS'
    }, {
      img: 'assets/img/tecnology/node.png',
      description: 'Node.Js'
    }, {
      img: 'assets/img/tecnology/javascript.png',
      description: 'JavaScript'
    }, {
      img: 'assets/img/tecnology/react.png',
      description: 'ReactJS'
    }, {
      img: 'assets/img/tecnology/vue.png',
      description: 'vueJS'
    },
  ];
  tecnologies2 = [
    {
      img: 'assets/img/tecnology/jest.png',
      description: 'jest'
    }, {
      img: 'assets/img/tecnology/ts.png',
      description: 'TypeScript'
    }, {
      img: 'assets/img/tecnology/html5.png',
      description: 'HTML5'
    }, {
      img: 'assets/img/tecnology/css.png',
      description: 'CSS3'
    }, {
      img: 'assets/img/tecnology/jasmine.png',
      description: 'jasmine'
    }, {
      img: 'assets/img/tecnology/thymeleaf.png',
      description: 'thymeleaf'
    }];
  tecnologies3 = [
    {
      img: 'assets/img/tecnology/java.png',
      description: 'java'
    }, {
      img: 'assets/img/tecnology/kotlin.png',
      description: 'kotlin'
    }, {
      img: 'assets/img/tecnology/spring.png',
      description: 'spring'
    }, {
      img: 'assets/img/tecnology/gradle.png',
      description: 'gradle'
    }, {
      img: 'assets/img/tecnology/python.png',
      description: 'python'
    }, {
      img: 'assets/img/tecnology/Git.png',
      description: 'Git'
    }
  ];

  tecnologies4 = [
    {
      img: 'assets/img/tecnology/docker.png',
      description: 'docker'
    }, {
      img: 'assets/img/tecnology/heroku.png',
      description: 'heroku'
    }, {
      img: 'assets/img/tecnology/postgresql.png',
      description: 'PostgreSQL'
    }, {
      img: 'assets/img/tecnology/firebase.png',
      description: 'Firebase'
    }, {
      img: 'assets/img/tecnology/mongodb.png',
      description: 'MongoDB'
    }, {
      img: 'assets/img/tecnology/sequelize.png',
      description: 'Sequelize'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
