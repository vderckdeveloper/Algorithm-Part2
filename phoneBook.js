const phone_book = ["119", "97674223", "1195524421"]

const solution = phone_book => {
    phone_book.sort();
    for (let i = 0; i < phone_book.length; i++) {
        const prev = phone_book[i];
        const next = phone_book[i+1];
        if(next !== undefined && next.startsWith(prev)) return false;
    }
    return true;
}

solution(phone_book);