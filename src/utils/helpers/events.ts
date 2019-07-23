export const Events = {
	events: {} as any,
	dispatch: function(event: string, data?: any) {
		if (!this.events[event]) return;
		this.events[event].forEach((callback: Function) => callback(data));
	},
	subscribe: function(event: string, callback: Function) {
		if (!this.events[event]) this.events[event] = [];
		this.events[event].push(callback);
	}
};
