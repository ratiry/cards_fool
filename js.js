
let hearts_importance=0;
let squares_importance = 0;
let leaves_importance = 0;
let spears_importance = 0;
let choice_trump =  Math.floor(Math.random() * 3);
if(choice_trump == 0){
  choice_trump = 'hearts';
}else if(choice_trump ==1){
  choice_trump='spears';
}else if(choice_trump ==2){
  choice_trump = 'leaves';
}else if(choice_trump ==3){
  choice_trump = 'squares';
}
let my_trump_importance_array = [];
let enemy_importance_array = [];
let choice_badge_trump= choice_trump;
console.log(choice_trump);
let small_my_trump = 0;
let small_enemy_trump = 0;
let cards_object = {
  six_spears:['https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Playing_card_spade_6.svg/819px-Playing_card_spade_6.svg.png',1,'spears'],
  six_squares :['https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Playing_card_diamond_6.svg/1200px-Playing_card_diamond_6.svg.png',1,'squares'],
  six_hearts :['https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Playing_card_heart_6.svg/1200px-Playing_card_heart_6.svg.png',1,'hearts'],
  six_leaves :['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkG3mvESzVKHo54_8nzN85XqcVa4QT6vVHD98UfP5dYslYq5UEG2HmwBDiIXdxEceVlKo&usqp=CAU',1,'leaves'],
  seven_spears:['https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Playing_card_spade_7.svg/1200px-Playing_card_spade_7.svg.png',2,'spears'],
  seven_hearts:['https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Playing_card_heart_7.svg/819px-Playing_card_heart_7.svg.png',2,'hearts'],
  seven_leaves:['https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Playing_card_club_7.svg/819px-Playing_card_club_7.svg.png',2,'leaves'],
  seven_squares:['https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Playing_card_diamond_7.svg/1200px-Playing_card_diamond_7.svg.png',2,'squares'],
  eight_hearts:['https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_heart_8.svg/1200px-Playing_card_heart_8.svg.png',3,'hearts'],
  eight_squares:['https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Playing_card_diamond_8.svg/1200px-Playing_card_diamond_8.svg.png',3,'squares'],
  eight_spears:['https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Playing_card_spade_8.svg/1638px-Playing_card_spade_8.svg.png',3,'spears'],
  eight_leaves:['https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Playing_card_club_8.svg/1200px-Playing_card_club_8.svg.png',3,'leaves'],
  nine_hearts:['https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_heart_9.svg/1200px-Playing_card_heart_9.svg.png',4,'hearts'],
  nine_leaves:['https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Playing_card_club_9.svg/819px-Playing_card_club_9.svg.png',4,'leaves'],
  nine_spears : ['https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Playing_card_spade_9.svg/1200px-Playing_card_spade_9.svg.png',4,'spears'],
  nine_squares:['https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Playing_card_diamond_9.svg/1200px-Playing_card_diamond_9.svg.png',4,'squares'],
  ten_hearts:['https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Playing_card_heart_10.svg/1200px-Playing_card_heart_10.svg.png',5,'hearts'],
  ten_spears:['https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Playing_card_spade_10.svg/1638px-Playing_card_spade_10.svg.png',5,'spears'],
  ten_leaves:['https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Playing_card_club_10.svg/819px-Playing_card_club_10.svg.png',5,'leaves'],
  ten_squares:['https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Playing_card_diamond_10.svg/1200px-Playing_card_diamond_10.svg.png',5,'squares'],
  jack_leaves:['https://media.istockphoto.com/vectors/poker-playing-card-jack-club-new-design-of-playing-cards-vector-id1277184951?k=20&m=1277184951&s=170667a&w=0&h=372MSwHgxGHwgX8JC50yAlEZni7FgUpzwk7u4HBEyog=',6,'leaves'],
  jack_spears:['https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/English_pattern_jack_of_spades.svg/360px-English_pattern_jack_of_spades.svg.png',6,'spears'],
  jack_hearts:['https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/English_pattern_jack_of_hearts.svg/360px-English_pattern_jack_of_hearts.svg.png',6,'hearts'],
  jack_squares:['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfFUt9PAJLD97o-6sRYA-trP_qtEQjuqKL9A1JAcJpVPQS1lJIa60L0hftBwI4OrklORw&usqp=CAU',6,'squares'],
  queen_hearts:['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZsvIf-RV_yw0FKMW3nMdUe-u7s0xzXnylvXHQQrxOATaqoYR5bk2FQ_1Aq7os8uacWU0&usqp=CAU',7,'hearts'],
  queen_leaves:['https://i.pinimg.com/236x/3a/94/14/3a9414b746760a40ec53bb0dc7e8f179.jpg',7,'leaves'],
  queen_spears:['https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Queen_of_spades_en.svg/1200px-Queen_of_spades_en.svg.png',7,'spears'],
  queen_squares:['https://thumbs.dreamstime.com/z/playing-card-queen-diamonds-isolated-white-playing-card-queen-diamonds-isolated-white-background-132849595.jpg',7,'squares'],
  king_hearts:['https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Atlas_deck_king_of_hearts.svg/1200px-Atlas_deck_king_of_hearts.svg.png',8,'hearts'],
  king_leaves:['https://image.shutterstock.com/z/stock-vector-poker-playing-card-king-club-312744614.jpg',8,'leaves'],
  king_squares:['https://cdn3.vectorstock.com/i/1000x1000/73/57/poker-playing-card-king-diamond-vector-8697357.jpg',8,'squares'],
  king_spears:['https://image.shutterstock.com/z/stock-vector-poker-playing-card-king-spade-312744596.jpg',8,'spears'],
  ace_spears:['https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Ace_of_spades.svg/706px-Ace_of_spades.svg.png',9,'spears'],
  ace_hearts:['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_y3kPW1ZBh4cXuuyW_DMwJMU0iIuOnPCTQHg-6rtQIvF-aWsNYoDgF1IO2PA7aU6fMM&usqp=CAU',9,'hearts'],
  ace_squares:['https://img.favpng.com/6/22/23/playing-card-ace-of-hearts-suit-ace-of-spades-png-favpng-2W0YEWWnFNHrHnWnH1guZP6SL.jpg',9,'squares'],
  ace_leaves:['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjHPvnlVXx8td3ltqIgmrLs7wCdmUD5cWHzw&usqp=CAU',9,'leaves']
}
let giving_cards = Object.values(cards_object);
let deck_card_src = 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Atlas_deck_card_back_green_and_dark_red.svg';
let trump_array=[];
let press_F5 = document.getElementById('press_F5');
for(let i=0;i<Object.keys(cards_object).length;i++){
  if(Object.values(cards_object)[i][2] == choice_trump){
    console.log('hh')
    Object.values(cards_object)[i][1] = Object.values(cards_object)[i][1] + 100;
    console.log( Object.values(cards_object)[i][1]);
    trump_array.push(Object.values(cards_object)[i]);

  }
}

let chosen_trump = 0;
let lights_out_container = document.querySelector('.lights_out_container_inner');
let lights_out_button = document.getElementById('lights_out_button');
let deck_container = document.getElementById('deck_container_inner');
console.log(trump_array);
for(let i=0;i<Object.values(cards_object).length;i++){
  let img = document.createElement('img');
  if(i==0){
     chosen_trump = Math.floor(Math.random() * trump_array.length);
    console.log(chosen_trump);
    img.src = trump_array[chosen_trump][0];
    console.log(img.src);
    chosen_trump = trump_array[chosen_trump][0];
  }else{
    img.src = deck_card_src;
  }
  deck_container.appendChild(img)
}
let play_field_container = document.querySelector('.play_field_container');
let my_cards_container = document.querySelector('.my_cards_container');
let enemy_cards_container = document.querySelector('.enemy_cards_container');
let p_my = document.getElementById('p_my');
let p_enemys = document.getElementById('p_enemys');
let been_cards_array = [];
console.log(Object.values(cards_object))

function bubbleSort(arr) {
  for (var i = 0, endI = arr.length - 1; i < endI; i++) {
      var wasSwap = false;
      for (var j = 0, endJ = endI - i; j < endJ; j++) {
          if (arr[j][1] > arr[j + 1][1]) {
              var swap = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = swap;
              wasSwap = true;
          }
      }
      if (!wasSwap) break;
  }
  return arr;
}


let seeking_for_repeats_function = function(was_card,giving_card){
  for(let ii=0;ii<been_cards_array.length;ii++){
    if(giving_card ==been_cards_array[ii]){
      was_card=true;
    }
  }
  console.log(was_card)
  return was_card;
}
been_cards_array.push(chosen_trump);
let shuffling_function = function(container){
  console.log(been_cards_array)
  let my_cards = [];
  for(let i=0;i<6-container.children.length;i++){
    let giving_card= Math.floor(Math.random()*giving_cards.length);
    let was_card = false;
    for(let ii=0;ii<been_cards_array.length;ii++){
      if(giving_card ==been_cards_array[ii]){
        was_card=true;
        console.log(was_card);
      }
      console.log(Object.values(cards_object)[giving_card][0]);
    }
    if(chosen_trump ==Object.values(cards_object)[giving_card][0]){//fix
      console.log('was trump')
      was_card = true;
    }
    if(was_card==false){
      my_cards.push(Object.values(cards_object)[giving_card]);
    }else{
      while(was_card == true){
        giving_card= Math.floor(Math.random()*giving_cards.length);
        let was_card_2 = false;
        was_card_2= seeking_for_repeats_function(was_card_2,giving_card);
        if(was_card_2 == false & giving_cards[giving_card][0] != chosen_trump){
          my_cards.push(Object.values(cards_object)[giving_card]);
          was_card=false;
        }
      }
    }
    been_cards_array.push(giving_card);
  }
  console.log(my_cards);
  my_cards = bubbleSort(my_cards);
  return my_cards;
}


let template_my_card = document.getElementById('my_card_template');
let placing_my_cards = function(){
  let quanity_placing_numbers = shuffling_function(my_cards_container);
  for(let i=0;i<quanity_placing_numbers.length;i++){
    let my_new_card = template_my_card.cloneNode(true).content;
    let my_new_card_img =my_new_card.querySelector('img');
    my_new_card_img.src = quanity_placing_numbers[i][0];
    my_cards_container.appendChild(my_new_card);
    if(quanity_placing_numbers[i][2] ==choice_badge_trump){
      my_trump_importance_array.push(quanity_placing_numbers[i][1]);
      console.log(quanity_placing_numbers[i][1])
    }
  }
  for(let i=quanity_placing_numbers.length;i>0;i--){
   deck_container.children[i].remove();
  } 
}
placing_my_cards();
let placing_enemy_carts = function(){
  let enemy_cards_quanity = shuffling_function(enemy_cards_container);
  for(let i=0;i<enemy_cards_quanity.length;i++){
    let img = document.createElement('img');
    img.src = enemy_cards_quanity[i][0];
    enemy_cards_container.appendChild(img);
    if(enemy_cards_quanity[i][2] == choice_badge_trump){
      enemy_importance_array.push(enemy_cards_quanity[i][1]);
    }
  }
  for(let i=enemy_cards_quanity.length;i>0;i--){
    deck_container.children[i].remove();
  } 
}
placing_enemy_carts();
let whose_turn = '';
small_my_trump = Math.min.apply(null, my_trump_importance_array);
small_enemy_trump =Math.min.apply(null, enemy_importance_array);
let whose_victory = '';
if(my_trump_importance_array.length !==0 & enemy_importance_array.length !==0){
  if(small_my_trump > small_enemy_trump){
    console.log('enemys move');
    p_enemys.textContent = 'the first move';
    whose_turn = 'enemys';
  }else{
    console.log('my move')
    p_my.textContent = 'the first move';
    whose_turn = 'my';
  }
}else{
  p_my.textContent = 'the first move';
  choice_first_move = 'my';
}

  let result_of_my_move = 0;
  let enemy_response=0;
  let play_field_container_imgs_2 = 0;
  let template_play = document.getElementById('template-play-field');


for(let i=0;i<my_cards_container.children.length;i++){
  let clicked_card = my_cards_container.children[i];
  let clicked_card_img = clicked_card.querySelector('img');
  let was_importance_array=[];
  clicked_card.addEventListener('click',function(){
    console.log(clicked_card_img)
    console.log(play_field_container_imgs_2.length);
    console.log(clicked_card_img.src);
    let was_card_play_field = false;
    let card_inf = 0;
    for(let i=0;i<Object.values(cards_object).length;i++){
      if(clicked_card_img.src ==Object.values(cards_object)[i][0]){
        card_inf= Object.values(cards_object)[i];
      }
    }
    for(let ii=0;ii<play_field_container_imgs_2.length;ii++){
      console.log('haha');
      for(let iii=0;iii<Object.values(cards_object).length;iii++){
        if(play_field_container_imgs_2[ii].src ==Object.values(cards_object)[iii][0]){
          was_importance_array.push(Object.values(cards_object)[iii][1]);
          break;
        }
      }
    }
    console.log(card_inf)
    console.log(was_importance_array);
    if(play_field_container_imgs_2 ==0 || result_of_my_move =='accept'){
      if(my_cards_container.children.length <6 & result_of_my_move =='accept' & whose_victory ==''){
        placing_my_cards();
        
      }
      was_importance_array = [];
      result_of_my_move = 0;
      was_card_play_field = true;
    }else if(result_of_my_move != 'lights_out'){
      if(card_inf[2] == choice_badge_trump){
        for(let ii=0;ii<was_importance_array.length;ii++){
          console.log(was_importance_array[ii]+ ' and '+ card_inf[1])
          if(card_inf[1]-100 == was_importance_array[ii] || card_inf[i] == was_importance_array[ii]){
            was_card_play_field = true;
            break;
          }
        }
      }else{
        for(let ii=0;ii<was_importance_array.length;ii++){
          
          if(card_inf[1] == was_importance_array[ii] || card_inf[1]+100 == was_importance_array[ii]){
            was_card_play_field = true;
            break;
          }
        }
      }
    }
    if(was_card_play_field == true){
      clicked_card.remove();
      let template_play_copy = template_play.cloneNode(true).content;
      let template_play_img = template_play_copy.querySelector('.beat_card');
      template_play_img.src = clicked_card_img.src;
      play_field_container.appendChild(template_play_copy);
      console.log(play_field_container);
      enemy_response= computer_beat_function(clicked_card_img,play_field_container.children[play_field_container.children.length-1],was_importance_array,result_of_my_move);
      console.log(enemy_response)
      let play_field_container_imgs = play_field_container.querySelectorAll('img');
      console.log(play_field_container_imgs)
      play_field_container_imgs_2 = play_field_container_imgs;
      console.log(play_field_container_imgs_2);
      if(my_cards_container.children.length ==0){
        p_my.textContent = 'WINS';
        whose_victory = 'my';
      }
    }
    if(enemy_response == 'accept'){
    lights_out_button.style.display ='none';
    result_of_my_move = enemy_response;
    console.log(result_of_my_move);
    whose_turn = 'my';
    }
    if(play_field_container.children.length>0){
      if(result_of_my_move ==0){
        lights_out_button.style.display ='block';
        lights_out_button.addEventListener('click',function(){
          console.log('hhhvvvvvvvv');
          result_of_my_move = 'lights_out';
          console.log(result_of_my_move);
          lights_out_button.style.display ='none';
          whose_turn = 'enemys';
          lights_out_finction();
        })
      }
    }
  })
}
console.log(result_of_my_move)





let computer_beat_function = function(card,template_play_copy,was_importance_array,result_of_my_move){
  let enemy_cards_inf_array = [];
  let chosen_enemy_card = 0;
  for(let i=0;i<Object.values(cards_object).length;i++){
    if(card.src ==Object.values(cards_object)[i][0]){
      card_inf= Object.values(cards_object)[i];
    }
  }
  for(let i=0;i<enemy_cards_container.children.length;i++){
    let enemy_img_src = enemy_cards_container.children[i].src;
    for(let ii=0;ii<Object.values(cards_object).length;ii++){
      if(enemy_img_src ==Object.values(cards_object)[ii][0]){
        console.log(Object.keys(cards_object)[ii]);
        enemy_cards_inf_array.push(Object.values(cards_object)[ii]);
        break;
      }
    }
  }

  for(let i=0;i<enemy_cards_inf_array.length;i++){
    if(enemy_cards_inf_array[i][2] == card_inf[2] || enemy_cards_inf_array[i][2] == choice_badge_trump){
      if(enemy_cards_inf_array[i][1]>card_inf[1]){
        console.log('hhh');
        enemy_cards_container.children[i].remove();
        let enemy_img =template_play_copy.querySelector('.to_beated_card');
        enemy_img.src = enemy_cards_inf_array[i][0];
        chosen_enemy_card = enemy_cards_inf_array[i][0];
        console.log(template_play_copy);
        console.log(enemy_cards_inf_array[i][0]);
        break;
      }
    }
  }
  if(chosen_enemy_card ==0){
    console.log('Works');
    result_of_my_move = 'accept';
    console.log(result_of_my_move);
    let play_field_imgs = play_field_container.querySelectorAll('img');
    for(let i=0;i<play_field_imgs.length;i++){
      enemy_cards_container.appendChild(play_field_imgs[i]);     
    }
  }
  return result_of_my_move;
}
let lights_out_finction = function(){
  let play_field_imgs = play_field_container.querySelectorAll('img');
  console.log(play_field_imgs)
  for(let i=0;i<play_field_imgs.length;i++){
    play_field_imgs[i].src = deck_card_src;
    lights_out_container.appendChild(play_field_imgs[i]);
  }
  for(let i=0;i<play_field_container.children.length;i++){
    play_field_container.children[i].remove();
  }
}




