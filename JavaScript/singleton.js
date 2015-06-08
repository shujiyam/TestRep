
function Universe() {
	// インスタンスのキャッシュ
	var instance;
	// 試験
	// コンストラクタを書き換えて、キャッシュを返すようにする。
	Universe = function Universe() {
		return instance;
	};


	// プロトタイププロパティを引き継ぐ。
	Universe.prototype = this;

	// インスタンスの生成。
	instance = new Universe();

	// コンストラクタのポインタを再設定。
	instance.constructor = Universe;

	// プロパティ
	instance.startTime = 0;

	return instance;
}

var uniA = new Universe();
var uniB = new Universe();
console.log(uniA.startTime);

console.log(uniA === uniB);

var Universe2;
(function(){
	var instance;
	Universe2 = function Universe2() {
		if (instance) {
			return instance;
		}
		instance = this;
		this.startTime = 0;
	};
}());

var uni1 = new Universe2();
Universe2.prototype.test1 = "aaa";
var uni2 = new Universe2();
Universe2.prototype.test2 = "BBB";

uni1.startTime = 1;
uni1.endTime = 100;
console.log("uni1.startTime:" + uni1.startTime);
console.log("uni1.endTime:" + uni1.endTime);
console.log("uni2.startTime:" + uni2.startTime);
console.log("uni2.endTime:" + uni2.endTime);

uni2.startTime = 2;
console.log(uni1.startTime);

console.log(uni1 === uni2);
