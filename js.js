
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
    Object.values(cards_object)[i][1] = Object.values(cards_object)[i][1] + 100;
    console.log( Object.values(cards_object)[i][1]);
    trump_array.push(Object.values(cards_object)[i]);

  }
}

let chosen_trump = 0;
let lights_out_container = document.querySelector('.lights_out_container_inner');
let lights_out_button = document.getElementById('lights_out_button');
let deck_container = document.getElementById('deck_container_inner');
let chosen_trump_index =0;
console.log(trump_array);
for(let i=0;i<Object.values(cards_object).length;i++){
  let img = document.createElement('img');
  if(i==0){
    chosen_trump = Math.floor(Math.random() * trump_array.length);
    console.log(chosen_trump);
    for(let ii=0;ii<Object.values(cards_object).length;ii++){
      if(trump_array[chosen_trump] == Object.values(cards_object)[ii]){
        chosen_trump_index = ii;
        console.log(ii);
        console.log(chosen_trump_index + ' index of trump')
        break;
      }
    }
    console.log(chosen_trump_index);
    img.src = trump_array[chosen_trump][0];
    console.log(img.src);
    chosen_trump = trump_array[chosen_trump][0];
  }else{
    img.src = deck_card_src;
  }
  deck_container.appendChild(img);
}

let been_cards_array = [];
console.log(been_cards_array);
been_cards_array.push(chosen_trump_index);

let play_field_container = document.querySelector('.play_field_container');
let my_cards_container = document.querySelector('.my_cards_container');
let enemy_cards_container = document.querySelector('.enemy_cards_container');
let p_my = document.getElementById('p_my');
let p_enemys = document.getElementById('p_enemys');
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
  console.log(was_card);
  return was_card;
}
let shuffling_function = function(container){
  if(deck_container.children.length > 6-container.children.length){
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
      if(was_card==false){
        my_cards.push(Object.values(cards_object)[giving_card]);
      }else{
        while(was_card == true){
          giving_card= Math.floor(Math.random()*giving_cards.length);
          let was_card_2 = false;
          was_card_2= seeking_for_repeats_function(was_card_2,giving_card);
          if(was_card_2 == false){
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
  }else{
    let my_cards = [];

    for(let i=0;i<deck_container.children.length;i++){
      let giving_card= Math.floor(Math.random()*giving_cards.length);
      let was_card = false;
      console.log(i)
      if(i == deck_container.children.length-1){ 
        console.log('ONE CARD IS LEFT');
        been_cards_array.splice(0,1);
      }
      for(let ii=0;ii<been_cards_array.length;ii++){
        if(giving_card ==been_cards_array[ii]){
          was_card=true;
          console.log(was_card);
        }
        console.log(Object.values(cards_object)[giving_card][0]);
      }
    
      if(was_card==false){
        my_cards.push(Object.values(cards_object)[giving_card]);
      }else{
        while(was_card == true){
          giving_card= Math.floor(Math.random()*giving_cards.length);
          let was_card_2 = false;
          was_card_2= seeking_for_repeats_function(was_card_2,giving_card);
          if(was_card_2 == false){
            my_cards.push(Object.values(cards_object)[giving_card]);
            was_card=false;
          }
        }
      }

      been_cards_array.push(giving_card);
    }
    console.log(my_cards);
    my_cards = bubbleSort(my_cards);
    console.log(my_cards);
    return my_cards;
  }

}


let template_my_card = document.getElementById('my_card_template');
let placing_my_cards = function(){
  if(deck_container.children.length>0){
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

  if(deck_container.children.length>quanity_placing_numbers.length){
    for(let i=quanity_placing_numbers.length;i>0;i--){
      deck_container.children[i].remove();
      } 
  }else{
    for(let ii=0;ii<5;ii++){
      for(let i=0;i<deck_container.children.length;i++){
        deck_container.children[i].remove();
      }
    }
  }
  }
}
placing_my_cards();
let placing_enemy_cards = function(){
  if(deck_container.children.length>0){
    let enemy_cards_quanity = shuffling_function(enemy_cards_container);
    for(let i=0;i<enemy_cards_quanity.length;i++){
      let img = document.createElement('img');
      img.src = enemy_cards_quanity[i][0];
      enemy_cards_container.appendChild(img);
      if(enemy_cards_quanity[i][2] == choice_badge_trump){
        enemy_importance_array.push(enemy_cards_quanity[i][1]);
      }
    }
    if(deck_container.children.length>enemy_cards_quanity.length){
      for(let i=enemy_cards_quanity.length;i>0;i--){
        deck_container.children[i].remove();
       } 
    }else{
      for(let ii=0;ii<5;ii++){
        for(let i=0;i<deck_container.children.length;i++){
          deck_container.children[i].remove();
        }
      }
    }
  }
}
placing_enemy_cards();
let whose_turn = '';
small_my_trump = Math.min.apply(null, my_trump_importance_array);
small_enemy_trump =Math.min.apply(null, enemy_importance_array);
let flag_to_switch_move = false;

if(my_trump_importance_array.length !==0 & enemy_importance_array.length !==0){
  if(small_my_trump > small_enemy_trump){
    console.log('enemys move');
    p_enemys.textContent = 'the first move';
    whose_turn = 'enemys';
    flag_to_switch_move = true;
  }else{
    console.log('my move')
    p_my.textContent = 'the first move';
    whose_turn = 'my';
    flag_to_switch_move = false;
  }
}else{
  p_my.textContent = 'the first move';
  choice_first_move = 'my';
  flag_to_switch_move = false;
}

let counting_doubles_function = function(array){
  var counts = {};

for (var i = 0; i < array.length; i++)
    counts[array[i]] = (counts[array[i]] + 1) || 1;
  return counts;
}
let count_for_clicking = 0;


let recognizing_card = function(card,button, worth, house){
  if(button == 'button'){
    let card_img = card.querySelector('img');
    for(let i=0;i<Object.values(cards_object).length;i++){
      if(Object.values(cards_object)[i][0] == card_img.src){
        let card_inf =[]; 
        card_inf.push(Object.values(cards_object)[i][1]);
        card_inf.push(Object.values(cards_object)[i][2]);
        return card_inf;
      }
    }
  }else if(button != 'find_img'){
    for(let i=0;i<Object.values(cards_object).length;i++){
      if(Object.values(cards_object)[i][0] == card.src){
        let card_inf =[]; 
        card_inf.push(Object.values(cards_object)[i][1]);
        card_inf.push(Object.values(cards_object)[i][2]);
        card_inf.push(Object.values(cards_object)[i][0]);
        return card_inf;
      }
    }
  }else if(button == 'find_img'){
    console.log(worth + ' ' + house);
    for(let i=0;i<Object.values(cards_object).length;i++){
      if(Object.values(cards_object)[i][1] == worth & Object.values(cards_object)[i][2] == house){
        return Object.values(cards_object)[i][0];
      }
    }
  }
} 



let futher_moves_enemy = function(enemy_worth_array,enemy_house_array,enemy_cards_inf){
  let play_field_imgs = play_field_container.querySelectorAll('img');
  let play_field_imgs_inf = [];
  let giving_cards = [];
  let to_resume = false;
  for(let i=0;i<play_field_imgs.length;i++){
    play_field_imgs_inf.push(recognizing_card(play_field_imgs[i]));
  }
  for(let i=0;i<play_field_imgs_inf.length;i++){
    console.log(play_field_imgs_inf[i]);
    for(let ii=0;ii<enemy_worth_array.length;ii++){
      console.log(enemy_worth_array[ii]);
      if(enemy_worth_array[ii] ==play_field_imgs_inf[i][0]  || enemy_worth_array[ii] ==play_field_imgs_inf[i][0]-100 ){
        giving_cards.push(enemy_cards_inf[ii]);
        to_resume = true;
        break;       
      }else if(deck_container.children.length ==0){
        if(enemy_worth_array[ii]-100 ==play_field_imgs_inf[i][0]){
          giving_cards.push(enemy_cards_inf[ii]);
          to_resume = true;
          break;
        }
      }
    }
  }
  if(to_resume == true){
    console.log(giving_cards);
    let chosen_card_inf = giving_cards[0];
    console.log(chosen_card_inf)
    let chosen_card = recognizing_card('','find_img',chosen_card_inf[0],chosen_card_inf[1]); 
    console.log(chosen_card);
    return chosen_card;
  }else{
    return 'lights_out';
  } 
}



let first_move_enemy = function(){
  let enemy_worth_array = [];
  let enemy_house_array = [];
  let enemy_cards_inf = [];
  for(let i=0;i<enemy_cards_container.children.length;i++){
   let enemy_card_inf= recognizing_card(enemy_cards_container.children[i]);
   enemy_worth_array.push(enemy_card_inf[0]);
   enemy_house_array.push(enemy_card_inf[1]);
   enemy_cards_inf.push(enemy_card_inf);
  }
  console.log(enemy_worth_array);
  console.log(enemy_cards_inf);
  let counting_doubles_object = counting_doubles_function(enemy_worth_array);
  console.log(counting_doubles_object);
  let doubles = false;
  for(let i=0;i<Object.keys(counting_doubles_object).length;i++){
    if(Object.values(counting_doubles_object)[i] >1){
      doubles = true;
      break;
    }
  }
  if(doubles == true){
    console.log('DOUBLES');
    let repeats = [];
    for(let i=0;i<Object.values(counting_doubles_object).length;i++){
      repeats.push(Object.values(counting_doubles_object)[i]);
    }
    let the_biggest_repeat = Math.max.apply(null,repeats);
    console.log(the_biggest_repeat);
    let enemys_worth_cards = 0;
    for(let i=0;i<Object.keys(counting_doubles_object).length;i++){
      if(Object.values(counting_doubles_object)[i] == the_biggest_repeat){
        enemys_worth_cards = Object.keys(counting_doubles_object)[i];
        break;
      }
    }
    console.log(enemys_worth_cards);
    let enemys_worth_cards_array = [];
    for(let i=0;i<enemy_cards_container.children.length;i++){
      if(recognizing_card(enemy_cards_container.children[i])[0] ==enemys_worth_cards ){
        enemys_worth_cards_array.push(recognizing_card(enemy_cards_container.children[i]));
      }
    }
    console.log(enemys_worth_cards_array);
    let chosen_cards = [];
    for(let i=0;i<enemys_worth_cards_array.length;i++){
      chosen_cards.push(recognizing_card('','find_img',enemys_worth_cards_array[i][0],enemys_worth_cards_array[i][1])) ;
    }
    console.log(chosen_cards[0]);
    // let my_cards_imgs = my_cards_container.querySelectorAll('img');
    // for(let i=0;i<my_cards_imgs.length;i++){
    //   if(my_cards_imgs[i].src == chosen_cards[0]){
    //     console.log('FIXING THE BAG');
    //     console.log(my_cards_imgs[i].src);
    //     break;
    //   }
    // }
    return chosen_cards[0];
  }else{
    console.log(enemy_cards_inf);
    let chosen_worth_card = Math.min.apply(null,enemy_worth_array);
    let chosen_house_card = '';
    console.log(chosen_worth_card);
    for(let i=0;i<enemy_cards_inf.length;i++){
      if(chosen_worth_card == enemy_cards_inf[i][0]){
        chosen_house_card = enemy_cards_inf[i][1];
        break;
      }
    }
    let chosen_card = '';
    console.log(chosen_house_card + ' ' + chosen_worth_card);
    console.log(chosen_card);
    chosen_card = recognizing_card('', 'find_img',chosen_worth_card,chosen_house_card);
    console.log(chosen_card);
    // let my_cards_imgs = my_cards_container.querySelectorAll('img');
    // for(let i=0;i<my_cards_imgs.length;i++){
    //   if(my_cards_imgs[i].src == chosen_card){
    //     console.log('FIXING THE BAG');
    //     console.log(my_cards_imgs[i].src);
    //     break;
    //   }
    // }
    return chosen_card;
  }
}
 
let selecting_enemys_cards = function(){
  let enemy_worth_array = [];
  let enemy_house_array = [];
  let enemy_cards_inf = [];
  for(let i=0;i<enemy_cards_container.children.length;i++){
   let enemy_card_inf= recognizing_card(enemy_cards_container.children[i]);
   enemy_worth_array.push(enemy_card_inf[0]);
   enemy_house_array.push(enemy_card_inf[1]);
   enemy_cards_inf.push(enemy_card_inf);
  }
  if(play_field_container.childElementCount ==0){
    return first_move_enemy();
  }else{
    return futher_moves_enemy(enemy_worth_array,enemy_house_array, enemy_cards_inf);
  }
}
let template_play = document.getElementById('template-play-field');
let clicked_card = 0;


let accept_listener  = function(){
  lights_out_button.removeEventListener('click',accept_listener);
  lights_out_button.style.display = 'none';
  let play_field_imgs = play_field_container.querySelectorAll('img');
  for(let i=0;i<play_field_imgs.length;i++){
    play_field_imgs[i].parentElement.remove();
    play_field_imgs[i].remove();
    if(play_field_imgs[i].src !== "unknown"){
      making_my_card(play_field_imgs[i]);
    }else{
      break;
    }
  }
  my_cards_container.children[my_cards_container.children.length-1].remove();

  // for(let i=0;i<play_field_container.children.length;i++){
  //   play_field_container.children[i].remove();
  // }
  // for(let i=0;i<play_field_container.children.length;i++){
  //   play_field_container.children[i].remove();
  // }
  enemys_move('accept');
}


let enemys_move_forming_card = function(enemy_card_src){
  let enemy_imgs = enemy_cards_container.querySelectorAll('img');
  let victory_flag = false;
  for(let i=0;i<enemy_imgs.length;i++){
    if(enemy_imgs[i].src == enemy_card_src){
      enemy_imgs[i].remove();
      if(enemy_cards_container.children.length ==0){
        victory_flag = true;
      }
      break;
    }
  }
  let template_play_2 = template_play.cloneNode(true).content;
  let enemy_card = template_play_2.querySelector('.beat-card');
  enemy_card.src = enemy_card_src;
  play_field_container.appendChild(template_play_2);
  if(victory_flag == true){
    return enemys_move('victory');
  }
  
}
let permitting_to_beat = function(inf_1,inf_2){
  let permission = false;
  if(inf_1[0] > inf_2[0]){
    if(inf_1[1] == inf_2[1] || inf_1[1] ==choice_badge_trump){
      permission = true;
    }
  }
  return permission;
}
let making_my_card = function(img){
  let button = document.createElement('button');
  button.classList.add('my_card_button');
  button.appendChild(img);
  my_cards_container.appendChild(button);
}




let my_response = function(event){
  let response_card = event.target;
  let last_set_cards = play_field_container.children[play_field_container.children.length-1];
  let beat_card = last_set_cards.querySelector('.beat-card');
  let beat_card_inf = recognizing_card(beat_card);
  let response_card_inf = recognizing_card(response_card);
  if(permitting_to_beat(response_card_inf,beat_card_inf)){
    console.log('RESPOND');
    console.log(response_card);
    let button_response_card = response_card.parentElement;
    button_response_card.remove();
    if(my_cards_container.children.length ==0){
      let beated_card = last_set_cards.querySelector('.to-beated-card');
      beated_card.src = response_card.src; 
      enemys_move('my victory');
    }else{
      let beated_card = last_set_cards.querySelector('.to-beated-card');
      beated_card.src = response_card.src; 
      for(let i=0;i<my_cards_container.children.length;i++){
        my_cards_container.children[i].removeEventListener('click',my_response);
      }
      enemys_move();
    }
  }
}

let lights_out_function = function(){
  let play_field_imgs = play_field_container.querySelectorAll('img');
  for(let i=0;i<play_field_imgs.length;i++){
    play_field_imgs[i].parentElement.remove();
    play_field_imgs[i].remove();
    play_field_imgs[i].src = deck_card_src;
    lights_out_container.appendChild(play_field_imgs[i]);

  }
}


let enemys_move = function(result){
  p_enemys.textContent = 'moves';
  p_my.textContent = '';
  if(result !== 'victory' & result !== 'my victory'){
    if(result == 'lights_out'){
      lights_out_function();
      placing_enemy_cards();
      placing_my_cards(); 
      for(let i=0;i<my_cards_container.children.length;i++){
        my_cards_container.children[i].removeEventListener('click',my_response);
      }
      lights_out_button.style.display = 'none';
      lights_out_button.removeEventListener('click',accept_listener);
      return my_move();
    }else if(result != 'accept'){
      selecting_enemys_cards();
      let selected_enemy_card = selecting_enemys_cards();
      if(selected_enemy_card == 'lights_out'){
        return enemys_move('lights_out');
      } 
      enemys_move_forming_card(selected_enemy_card);
      lights_out_button.style.display = 'block';
      lights_out_button.textContent = 'accept';
      lights_out_button.addEventListener('click',accept_listener);
      for(let i=0;i<my_cards_container.children.length;i++){
        my_cards_container.children[i].addEventListener('click',my_response);
      }
    }else if(result == 'accept'){
      placing_my_cards();
      placing_enemy_cards();
      enemys_move();
    }
  }else if(result == 'victory'){
    p_enemys.textContent = 'WON';
    lights_out_button.removeEventListener('click',accept_listener);
    lights_out_button.style.display = '';
  }else if(result == 'my victory'){
    p_enemys.textContent = '';
    p_my.textContent = 'WON';
    lights_out_button.removeEventListener('click',accept_listener);
    lights_out_button.style.display = '';
  }
}

let enemys_response = function(){
  let play_set = play_field_container.children[play_field_container.children.length-1];
  let beat_card = play_set.querySelector('.beat-card');
  let beat_card_inf =  recognizing_card(beat_card);
  console.log(beat_card_inf);
  let enemys_cards_inf = [];
  for(let i=0;i<enemy_cards_container.children.length;i++){
    enemys_cards_inf.push(recognizing_card(enemy_cards_container.children[i]));
  }
  let response_cards = [];
  let response_cards_worth = [];
  for(let i=0;i<enemys_cards_inf.length;i++){
    if(enemys_cards_inf[i][0] > beat_card_inf[0] & enemys_cards_inf[i][1] == beat_card_inf[1]){
      response_cards.push(enemys_cards_inf[i]);
      response_cards_worth.push(enemys_cards_inf[i][0]);
    }
  }
  if(response_cards.length !=0){
    let chosen_card_worth = Math.min.apply(null, response_cards_worth);
    console.log(chosen_card_worth);
    let chosen_card_src = recognizing_card('','find_img',chosen_card_worth,beat_card_inf[1]);
    console.log(chosen_card_src);
    let to_beated_card = play_set.querySelector('.to-beated-card');
    console.log(to_beated_card);
    to_beated_card.src =chosen_card_src; 
    for(let i=0;i<enemy_cards_container.children.length;i++){
      if(enemy_cards_container.children[i].src == chosen_card_src){
        enemy_cards_container.children[i].remove();
        break;
      }
    }
    if(enemy_cards_container.children.length ==0){
      my_move('enemys victory');
    }
  }else{
    console.log('hh')
    my_move('accept');
  }
}

let my_move_listener = function(event){
  let card = event.target;
  let card_inf = recognizing_card(card);
  let play_set = document.getElementById('template-play-field').cloneNode(true).content;
  console.log(play_set);
  if(play_field_container.children.length ==0){
    let play_set_beat_img = play_set.querySelector('.beat-card');
    console.log(card.parentElement);
    card.parentElement.remove();
    if(my_cards_container.children.length ==0){
      play_set_beat_img.src = card.src;
      console.log(card.src)
      console.log(play_set_beat_img);
      play_field_container.appendChild(play_set);
      enemys_move('my victory');
    }else{
      play_set_beat_img.src = card.src;
      console.log(card.src)
      console.log(play_set_beat_img);
      play_field_container.appendChild(play_set);
      enemys_response();
    }
  }else{
    let play_field_imgs = play_field_container.querySelectorAll('img');
    let permission_to_give = false;
    for(let i=0;i<play_field_imgs.length;i++){
      let play_field_card_inf = recognizing_card(play_field_imgs[i]);
      if(play_field_card_inf[0] == card_inf[0] ||play_field_card_inf[0] -100== card_inf[0] || play_field_card_inf[0] == card_inf[0]-100){
        permission_to_give = true;
        break;
      }
    }
    if(permission_to_give == true){
    let play_set_beat_img = play_set.querySelector('.beat-card');
    card.parentElement.remove();
    play_set_beat_img.src = card.src;
    play_field_container.appendChild(play_set);
    enemys_response();
    }
  }
} 
let lights_out_listener = function(){
  let play_field_imgs = play_field_container.querySelectorAll('img');
  for(let i=0;i<play_field_imgs.length;i++){
    play_field_imgs[i].parentElement.remove();
    play_field_imgs[i].remove();
    play_field_imgs[i].src = deck_card_src;
    lights_out_container.appendChild(play_field_imgs[i]);
  }
  placing_enemy_cards();
  placing_my_cards();
  lights_out_button.removeEventListener('click',lights_out_listener);
  lights_out_button.style.display = 'none';
  my_move('lights_out');
}
let accept_function = function(){
  let play_field_imgs = play_field_container.querySelectorAll('img');
  for(let i=0;i<play_field_imgs.length;i++){
    let button = play_field_imgs[i].parentElement;
    console.log(button);
    button.remove();
    play_field_imgs[i].remove();
    enemy_cards_container.appendChild(play_field_imgs[i]);
  }
  enemy_cards_container.children[enemy_cards_container.children.length-1].remove();
}
let my_move = function(result){
  if(result !== 'my victory' & result !== 'enemys victory'){
    if(result == 'lights_out'){
      for(let i=0;i<my_cards_container.children.length;i++){
        my_cards_container.children[i].removeEventListener('click',my_move_listener);
      }
      return enemys_move();
    }else{
      p_enemys.textContent = '';
      p_my.textContent = 'moves';
    if(result == 'accept'){
      console.log('accept');
      accept_function();
      placing_my_cards();
      placing_enemy_cards();
    }
    
    for(let i=0;i<my_cards_container.children.length;i++){
      my_cards_container.children[i].addEventListener('click',my_move_listener);
    }
    lights_out_button.addEventListener('click',lights_out_listener);
    lights_out_button.textContent = 'lights out';
    lights_out_button.style.display = 'block';
    }
    
  }else if(result == 'enemys victory'){
    p_enemys.textContent = 'WON';
    p_my.textContent = '';
    lights_out_button.removeEventListener('click',lights_out_listener);
    lights_out_button.style.display = '';
  }else if(result == 'my victory'){
    p_enemys.textContent = '';
    p_my.textContent = 'WON';
    lights_out_button.removeEventListener('click',lights_out_listener);
    lights_out_button.style.display = '';
  }
}






if(flag_to_switch_move == true){
  for(let i=0;i<my_cards_container.children.length;i++){  
    my_cards_container.children[i].removeEventListener('click', my_move_listener);
  }
  enemys_move();
}else{
  my_move();
}
