# Focus Timer Pomodoro

Aplicação de um temporizador que aplica a técnica de estudos Pomodoro.

![image](https://user-images.githubusercontent.com/107502907/192027027-4016c728-03f9-43c4-a552-23195fd68508.png)

## Descrição

Este temporizador tem por finalidade a aplicação da técnica Pomodoro. Uma técnica excelente para ser aplicada durante seus estudos.
Nesta aplicação, também estão inseridas quatro áudios para ouvir junto, enquanto o cronômetro roda. 
Esses áudios são de sons ambientes para ajudar na eliminação de ruídos externos e manter o seu foco apenas na sua atividade.

o Pomodoro consiste em um ciclo de duas horas. A cada 25 minutos, sem interrupções, dedicado a uma tarefa, você deve fazer uma pausa de 5 minutos.
Ao final do ciclo de duas horas, você deverá fazer uma pausa maior de 30 minutos e depois começar um novo Pomodoro.

Nesta aplicação temos por padrão o tempo de 25 minutos em seu display, funcionando através do método "setTimeout()" em seu código. E sempre que apertar o botão "Stop", o temporizador reiniciará para os 25 minutos de padrão e aguardará o comando para iniciar uma nova contagem.

## Funcionalidades:

### Botões de controle:

- botões "Play" e "Pause", alternam suas posições, iniciando a contagem regressiva e interrompendo o tempo, respectivamente;
- botão "Stop" resetando o temporizador e e desativanddo todos os botões de controle pressionados;
- botões "(+)" e "(-)" para adicionar ou remover 5 minutos do temporizador, respectivamente.

### Botões de cards de áudio:

ao lado, possuem cada um, um áudio em loop, de som ambiente do seu respectivo card. São eles:

- Floresta;
- Chuva;
- Cafeteria;
- e Lareira.

### Audios

Ao clicar em qualquer um dos cards, o "soundOff" (mute) é desativado e ativa-se o respectivo áudio selecionado. 
O mesmo procedimento vale para qualquer um dos 4 cards. E ao clicar novamente no botão soundOff, desativa-se novamente o áudio que estiver sendo reproduzido.

Também existe o áudio padrão de botão pressionado, para qualquer um dos botões da aplicação.

Quando o contador chegar em zero, será reproduzido o alarme do áudio KitchenTimer, informando ao usuário que o seu tempo inserido chegou ao fim.
E com um indicador visual, todos os botões de controle também piscam nesse momento por 1 segundo.

## Tecnologias utilizadas:

- HTML;
- CSS;
- JavaScript.

## Preview

Para conferir a aplicação, acesse:

- https://higomoreiraq.github.io/focus-timer-pomodoro/

## Contato

[![bio](https://img.shields.io/badge/bio_higomoreiraq-02799D?style=for-the-badge&logo=ko-fi&logoColor=white)](https://higomoreiraq.github.io/Bio-Higo-Moreira/)

## Screenshots

### Screen 1
Temporizador iniciado e áudio de chuva ativado.
![image](https://user-images.githubusercontent.com/107502907/192027634-a729ec3a-3a0d-4d34-b2fb-4bc9212e7910.png)

### Screen 2
Temporizador encerrado, piscam-se os botões do controlador e o áudio de alarme é ativado.
![image](https://user-images.githubusercontent.com/107502907/192027771-19bb26bc-fd00-4590-b1cb-6053da5361df.png)


#
# 🌎 English

# Focus Timer Pomodoro

Application of a timer that applies the Pomodoro study technique.

## Description

This timer is intended to apply the Pomodoro technique. An excellent technique to be applied during your studies.
In this application, four audios are also inserted to listen together, while the timer runs.
These audios are of ambient sounds to help eliminate external noise and keep your focus only on your activity.

the Pomodoro consists of a two-hour cycle. Every 25 minutes, without interruption, dedicated to a task, you should take a 5-minute break.
At the end of the two-hour cycle, you should take a longer 30-minute break and then start a new Pomodoro.

In this application we have by default the time of 25 minutes in its display, working through the method "setTimeout()" in its code. And whenever you press the "Stop" button, the timer will reset to the default 25 minutes and wait for the command to start a new count.

## Functionalities:

### Control buttons:

- "Play" and "Pause" buttons, alternate their positions, starting the countdown and stopping the time, respectively;
- "Stop" button resetting the timer and deactivating all pressed control buttons;
- "(+)" and "(-)" buttons to add or remove 5 minutes from the timer respectively.

### Audio card buttons:

to the side, they each have a looped audio, with ambient sound from their respective card. Are they:

- Forest;
- Rain;
- Coffee shop;
- and Fireplace.

### Audios

When clicking on any of the cards, the "soundOff" (mute) is deactivated and the respective selected audio is activated.
The same procedure goes for any of the 4 cards. And when you click the soundOff button again, the audio being played is turned off again.

There is also the standard button-press audio for any of the buttons in the application.

When the counter reaches zero, the KitchenTimer audio alarm will play, informing the user that their entered time has expired.
And with a visual indicator, all control buttons also flash at that time for 1 second.

## Technologies used:

- HTML;
- CSS;
- JavaScript.

## Preview

To check the application, go to:

- https://higomoreiraq.github.io/focus-timer-pomodoro/

## Contact

[![bio](https://img.shields.io/badge/bio_higomoreiraq-02799D?style=for-the-badge&logo=ko-fi&logoColor=white)](https://higomoreiraq.github.io/Bio-Higo-Moreira/)

## Screenshots

### Screen 1
Timer started and rain audio activated.

### Screen 2
Timer expired, controller buttons flash and alarm audio is activated.
