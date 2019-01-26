import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledges',
  template: `
  <section class="section section-tabs">
    <div class="container text-center">
      <h2 class="title text-center">Técnologias que já utilizei</h2>
      <div class="line-principal row">
        <div class="card html"><img src="../../assets/img/tecnology/html5.png" class="card-img-top" alt="html5"></div>
        <div class="card card-image"><img src="../../assets/img/tecnology/css.png" class="card-img-top" alt="css3"></div>
        <div class="card card-image"><img src="../../assets/img/tecnology/javascript.png" class="card-img-top" alt="javascript"></div>
        <div class="card card-image"><img src="../../assets/img/tecnology/angular.png" class="card-img-top" alt="angular"></div>
        <div class="card card-image"><img src="../../assets/img/tecnology/React.js.png" class="card-img-top" alt="react"></div>
        <div class="card card-image" style="padding-top: 8px;"><img src="../../assets/img/tecnology/vue.png" class="card-img-top"
            alt="vuejs"></div>
        <div class="card card-image" style="padding-top: 8px;"><img src="../../assets/img/tecnology/sass.png" class="card-img-top"
            alt="sass"></div>
        <div class="card card-image" style="padding-top: 4px;"><img src="../../assets/img/tecnology/thymeleaf.png" class="card-img-top"
            alt="thymeleaf"></div>
        <div class="card card-image"><img src="../../assets/img/tecnology/jasmine.png" class="card-img-top" alt="jasmine"></div>
        <div class="card card-image"><img src="../../assets/img/tecnology/ts.png" class="card-img-top" alt="typescript"></div>
      </div>
      <div class="line-principal row">
        <div class="card card-image"><img src="../../assets/img/tecnology/node.png" class="card-img-top" alt="nodejs"></div>
        <div class="card card-image"><img src="../../assets/img/tecnology/java.png" class="card-img-top" alt="java"></div>
        <div class="card card-image"><img src="../../assets/img/tecnology/python.png" class="card-img-top" alt="python"></div>
        <div class="card card-image"><img src="../../assets/img/tecnology/spring.png" class="card-img-top" alt="springboot"></div>
        <div class="card card-image"><img src="../../assets/img/tecnology/jest.png" class="card-img-top" alt="jest"></div>
        <div class="card card-image"><img src="../../assets/img/tecnology/gradle.png" class="card-img-top" alt="gradle"></div>
        <div class="card card-image"><img src="../../assets/img/tecnology/docker.png" class="card-img-top" alt="docker"></div>
        <div class="card card-image"><img src="../../assets/img/tecnology/heroku.png" class="card-img-top" alt="heroku"></div>
        <div class="card card-image"><img src="../../assets/img/tecnology/Git.png" class="card-img-top" alt="git"></div>
      </div>
      <div class="line-principal row">
        <div class="card card-image"><img src="../../assets/img/tecnology/postgresql.png" class="card-img-top" alt="postgresql"></div>
        <div class="card card-image"><img src="../../assets/img/tecnology/firebase.png" class="card-img-top" alt="firebase"></div>
        <div class="card card-image"><img src="../../assets/img/tecnology/mongodb.png" class="card-img-top" alt="mongodb"></div>
        <div class="card card-image"><img src="../../assets/img/tecnology/sql-server.png" class="card-img-top" alt="sqlserver"></div>
        <div class="card card-image" style="height: 100px;"><img src="../../assets/img/tecnology/sequelize.png" class="card-img-top"
            alt="sequelize"></div>
      </div>
    </div>
  </section>`,
  styleUrls: ['./knowledges.component.scss']
})
export class KnowledgesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
