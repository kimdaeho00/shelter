from flask import Flask, render_template
from flask_socketio import SocketIO, send

app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chat')
def chat():
    return render_template('chat.html')

@socketio.on('message')
def handle_message(msg):
    # 메시지 수신 시, 해당 메시지를 클라이언트에게 전송
    send(msg, broadcast=True)

if __name__ == '__main__':
    socketio.run(app, debug=True)
