class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;
    }
    addClock(time, callback){
        if(time === undefined || callback === undefined){
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if(this.alarmCollection.some(time)){
            console.warn('Уже присутствует звонок на это же время');
        }
        const clock = {callback, time, canCall : false};
        this.alarmCollection.push(clock);
    }
    removeClock(time){
        this.alarmCollection = this.alarmCollection.filter(obj => obj.time === time);
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
        this.alarmCollection.forEach((clock) => {
            if(time === this.getCurrentFormattedTime() && canCall === true){
                canCall === false;
                addClock(callback);
            }
        });

    }
    stop(){
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    resetAllCalls(){
        this.alarmCollection.forEach(clock.canCall = true);
    }
    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }

}