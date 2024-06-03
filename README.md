# TIC-TAC-TOE

I made a tic-tac-toe game to play.  
If you want to test it => [Play Here](https://tic-tac-toe-prabin.vercel.app/)

Hey, if you are reading this, I can't solve this problem in this.  
When a cell is filled, it should draw, but when the last input is filled and somebody won, it also shows draw.

Here is a screenshot of the problem:

[![Screenshot-2024-06-03-165213.png](https://i.postimg.cc/Hk2mvqTw/Screenshot-2024-06-03-165213.png)](https://postimg.cc/CRz9z6B5)

Here is the code I have done:

```javascript
checkWinner();
if(!checkWinner() && count === 9){
  drawGame();
} 
```
