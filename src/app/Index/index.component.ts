import { Component, Input, OnInit  } from '@angular/core';

@Component({
    styleUrls: ['index.component.css'],
    template: `

    <div class="slide-wrapper hideOnSmallScreen">

       <div id="homepage-feature" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
             <li data-target="#homepage-feature" data-slide-to="0" class="active"></li>
             <li data-target="#homepage-feature" data-slide-to="1"></li>
          </ol>

          <!-- Wrapper for slides -->
          <div class="carousel-inner">

             <div class="item active" style="background-image:url(assets/images/car2.png)">
             </div>

             <div class="item" style="background-image:url(assets/images/car1.png)">
             </div>

          </div>
          <!-- /.carousel-inner -->
          <!-- Controls -->
          <a class="left carousel-control" href="#homepage-feature" data-slide="prev">
            <span class="fa fa-angle-left"></span>
          </a>
          <a class="right carousel-control" href="#homepage-feature" data-slide="next">
            <span class="fa fa-angle-right"></span>
          </a>
       </div>
       <!-- /#homepage-feature.carousel -->

        <div class="red">
          <div class="container">
            <div class="row">
              <div class="col-md-4 red-content">
                <div class="header1">TOYOTA CAMRY</div>
                <div style="padding-top:25px; padding-bottom:25px">Весенние скидки до 100 000 рублей</div>
                <div>
                  <p><a class="btn btn-primary btn-custom-red  btn-primary-custom-red" style="padding-right: 25px; padding-left: 25px;" href="#" role="button">Подробнее</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>

       <!--<div class="red">
         <div class="red-content">
           <div class="header1">TOYOTA CAMRY</div>
           <div style="padding-top:25px; padding-bottom:25px">Весенние скидки до 100 000 рублей</div>
           <div class="jum-button">
             <p><a class="btn btn-primary btn-custom-red  btn-primary-custom-red" style="padding-right: 25px; padding-left: 25px;" href="#" role="button">Подробнее</a></p>
           </div>
         </div>
       </div> -->

    </div>
    <!-- /.container.slide-wrapper -->
       <script type='text/javascript'>
           $(document).ready(function() {
                $('#homepage-feature').carousel({
                    interval: 2000
                })
           });
       </script>

    <div class="container">

      <div class="row" style="margin-top: 0px">
        <div class="col-md-4" style="padding-top:30px">
          <div class="header1">on-line услуги</div>
        </div>
        <div class="col-md-2 border-right text-center">
          <online-service-component [text]="'Поиск автомобиля'" [imagePath]="'assets/images/search-auto-icon.png'">
          </online-service-component>
        </div>
        <div class="col-md-2 border-right text-center">
        <online-service-component [text]="'Оценка автомобиля'" [imagePath]="'assets/images/rating-icon.png'">
        </online-service-component>
        </div>
        <div class="col-md-2 border-right text-center">
        <online-service-component [text]="'Обмен автомобиля'" [imagePath]="'assets/images/swap-auto-icon.png'">
        </online-service-component>
        </div>
        <div class="col-md-2 text-center">
        <online-service-component [text]="'Обратная связь'" [imagePath]="'assets/images/feedback-icon.png'">
        </online-service-component>
        </div>
      </div>
    </div>





    <div class="combined-components gray-back">
      <div class="container">
          <red-line-title [text]="'Комфортный салон автомобилей с пробегом'"></red-line-title>
        <div class="row">
          <div class="col-md-4">
            <static-index-item-component [cssClass]="'white-back'" [title]="'Комфортная цена'" [text]="'Пример разного всякого текста'" [imagePath]="'assets/images/comf_price.png'" >
            </static-index-item-component>
          </div>
          <div class="col-md-4">
            <static-index-item-component [cssClass]="'red-back'" [title]="'Гарантия качества'" [text]="'Пример разного всякого текста'" [imagePath]="'assets/images/garantee.png'" >
            </static-index-item-component>
          </div>
          <div class="col-md-4">
            <static-index-item-component [cssClass]="'white-back'"  [title]="'Безопасность'" [text]="'Пример разного всякого текста'" [imagePath]="'assets/images/security.png'" >
            </static-index-item-component>
          </div>
        </div>
      </div>
    </div>

    <div class="combined-components white-back">
      <div class="container">
        <div class="row">
          <red-line-title [text]="'Лучшие предложения'"></red-line-title>
        </div>
        <best-sellers-collection>
        </best-sellers-collection>

        <div class="row" style="padding-top: 50px">
				 <div class="col-md-12 text-center">
				 <p><a class="btn btn-primary btn-custom-red  btn-primary-custom-red btn-lg" href="#" role="button">Посмотреть все предложения</a></p>
         </div>
			 </div>

       <div class="row" style="padding-top: 50px">
         <red-line-title [text]="'Отзывы наших клиентов'"></red-line-title>
         <comment-collection-component>
         </comment-collection-component>
      </div>


      </div>


    </div>




    `
})

export class IndexComponent {


}
