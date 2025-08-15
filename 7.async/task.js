class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;
    }
    addClock(time, callback){
        if(time === undefined || callback === undefined){
            throw new Error('Отсутствуют обязательные аргументы');
        }
        this.alarmCollection.some((time) => {
            console.warn('Уже присутствует звонок на это же время');
        });
        const clock = {callback, time, canCall : true};
        this.alarmCollection.push(clock);
    }
    removeClock(time){
        this.alarmCollection.filter(clock => clock.time !== time);
    }
    getCurrentFormattedTime(time){
        time = new Date();
        const hours = String(time.getHours()).padStart(2, '0');
        const minutes = String(time.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }
    start(){
        if(!this.intervalId){
            return
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach((clock) => {
                if(clock.time === this.getCurrentFormattedTime() && clock.canCall === true){
                    clock.canCall = false;
                    clock.callback();
                }
            });
        }, 1000);
    }
    stop(){
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    resetAllCalls(){
        this.alarmCollection.forEach((clock) => {
            clock.canCall = true;
        });
    }
    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }

}