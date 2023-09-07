const person = (fullName = "unknown", age = 25, isMale = false, avatar) => {
    const info = () => {
        return `fullName: ${fullName}, sex: ${isMale? "Laki-laki" : "Perempuan"}, age: ${age}`;
    };

    return {
        get getInfo() {
            return info();
        },
        toString() {
            return info();
        },
        addAge: (tahun) => {
            age += tahun;
        },
        setAge: (usiaBaru) => {
            age = usiaBaru;
        },
        rename: (namaBaru) => {
            fullName = namaBaru;
        },

        get infoPerson() {
            return {
                fullName,
                age,
                isMale,
                avatar,
            };
        }
    };
};

export default person;