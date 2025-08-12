class AlarmClock{
    constructor(alarmCollection, intervalId = null){
        this.alarmCollection = [];
        this.intervalId = intervalId;
    }
    addClock(time, callback){
        if(time === undefined || callback === undefined){
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if(time === this.addClock.time.find(alarmCollection)){
            console.warn('Уже присутствует звонок на это же время');
        }
        const clock = {callback, time, canCall};
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
        if(this.intervalId === !null){
            return
        }
        this.alarmCollection.forEach( ???? )

    }
    stop(){
        clearInterval();
        this.intervalId = null;
    }
    resetAllCalls(){
        forEach(canCall = true);
    }
    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }

}