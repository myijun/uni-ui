class MRequest {
    /**
     * 获取一个数组，字符串，json对象里的值 
     */
    static get() {
        if (arguments.length < 1 || arguments[0] == undefined) {
            return undefined;
        }
        if (arguments.length < 2) {
            return arguments[0] || undefined;
        }
        if (arguments.length < 3) {
            return arguments[0][arguments[1]] || undefined;
        }
        const args = [].slice.call(arguments);
        let _team;
        for (let i = 1, item = undefined; (item = args[i]); i++) {
            _team = i == 1 ? args[0][item] : _team[item];
            if (_team == undefined) {
                return _team;
            }
        }
        return _team;
    }
}


export default MRequest;





