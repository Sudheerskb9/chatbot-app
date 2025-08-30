import { Component } from '@angular/core';
import { Chat } from '../chat'; // your service
import { NgFor, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-ui',
  standalone: true,
  imports: [NgFor, NgClass, FormsModule],
  templateUrl: './chat-ui.html',
  styleUrls: ['./chat-ui.css'] // <-- fixed here
})
export class ChatUi {
  messages: { sender: 'user' | 'bot'; text: string }[] = [];
  userInput = '';

  constructor(private chatService: Chat) {}

  sendMessage() {
    if (!this.userInput.trim()) return;

    const userMsg = this.userInput;
    // Immediately add user message to chat
    this.messages.push({ sender: 'user', text: userMsg });
    this.userInput = '';

    // Send message to backend via your Chat service
    this.chatService.sendMessage(userMsg).subscribe(
      (res) => {
        this.messages.push({ sender: 'bot', text: res.reply });
      },
      (err) => {
        this.messages.push({ sender: 'bot', text: 'Error communicating with AI.' });
      }
    );
  }
}
