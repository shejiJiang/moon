
var transports = ['websocket','xhr-streaming','xdr-streaming','eventsource','htmlfile','xhr-polling','xdr-polling','jsonp-polling'];


export default class  SocketClient {
  constructor(){

  }
  subscribes:any[] = [];
  stomp:any;
  socket:any;
  connected:boolean;


  connect(url:string, _connect:any, headers:any){
     
    this.socket = new SockJS(url, null, {});
    this.stomp = Stomp.over(this.socket);
    this.stomp.connect(headers||{}, (frame:any)=>{
      this.connected = true;
      _connect&&_connect(frame);
      console.log('Connected: ' + frame);
      if(this.subscribes) {
        this.subscribes.forEach((s:any)=>{
          this.stomp.subscribe(s.topic, (response:any) =>{
            var body = response.body;
            if(typeof body === 'string'){
              try {
                body = JSON.parse(body);
              }catch(e){}
            }
            s.message && s.message.call(this.stomp, body,response, frame);
          },s.header||{});
        })
      }
    });
    return this;
  }

  subscribe(_topic:string, _message:any, header?:object){
    
    if(this.stomp&&this.connected){
      this.stomp.subscribe(_topic, (response:any) => {
        var body = response.body;
        if(typeof body === 'string'){
          try {
            body = JSON.parse(body);
          }catch(e){}
        }
        _message.call(this.stomp, body,response);
      },header||{});
    }else{
      this.subscribes.push({topic:_topic,message:_message,header:header});
    }
    return this;
  }
  disconnect (_close:any, header:any){
    if(!this.connected){
      console.warn("SocketClient is not connecting server.");
      return this;
    }
    this.connected = false;
    if(this.stomp){
      this.stomp.disconnect(()=>{
        _close&&_close.apply(this as any);
      },header||{})
    }
    return this;
  }

  send (target:string, data:string|object, ext:any){
    if(this.stomp && this.connected){
      this.stomp.send(target,ext||{},typeof data == 'string'?data:JSON.stringify(data));
      return;
    }
    console.warn('Fail to send data,connection is destroyed.');
  }

}