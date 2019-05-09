var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function timeout(n) {
    return new Promise(res => setTimeout(res, n));
}
export function add(greeting, a, animal) {
    return __awaiter(this, void 0, void 0, function* () {
        yield timeout(500);
        return greeting + a + animal;
    });
}
(() => __awaiter(this, void 0, void 0, function* () {
    console.log(yield add('Joan counted ', 3, ' penguins.'));
}))();
