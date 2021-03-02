const TOKEN = 'LINEのトークンを指定(取得方法：https://arukayies.com/gas/line_bot/gettoken)';
const DEBUGID = 'LINEのユーザIDを指定(取得方法：https://arukayies.com/gas/line_bot/get-userid)';

//LINEBOTでテキストメッセージを送るサンプル
function pushmessage_text() {
  //テキストメッセージを送る
  UrlFetchApp.fetch('https://api.line.me/v2/bot/message/push', {
    'headers': {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + TOKEN, //LINEのトークンを指定(取得方法：https://arukayies.com/gas/line_bot/gettoken)
    },
    'method': 'POST',
    'payload': JSON.stringify({
      'to': DEBUGID, //LINEのユーザIDを指定(取得方法：https://arukayies.com/gas/line_bot/get-userid)
      'messages': [{
        'type': 'text',
        'text': '\uDBC0\uDC84 LINE emoji' //テキストメッセージを送る
      }],
      'notificationDisabled': false // trueだとユーザーに通知されない
    }),
  });
}