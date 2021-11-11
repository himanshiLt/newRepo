const getAboutUsLink = require("./calculator");

describe('Test Language code', function () {
    it("Returns about-us for english language", () => {
        expect(getAboutUsLink("en-US")).toBe("/about-us");
    });

    it("Returns about-us for spanish language", () => {
        expect(getAboutUsLink("es-ES")).toBe("/acerca-de");
    });

    // it("Fail case for english language", () => {
    //     expect(getAboutUsLink("en-Uws")).toBe("/about-us");
    // });

    // it("Fail case for spanish", () => {
    //     expect(getAboutUsLink("es-ES")).toBe("/acerca-dedddd");
    // });

    it("Returns meist for estonian language", () => {
        expect(getAboutUsLink("et")).toBe("/meist");
    });

    it("Returns about-us for czech language", () => {
        expect(getAboutUsLink("cs")).toBe("/o nás");
    });

    // it("Fail czech language", () => {
    //     expect(getAboutUsLink("cs")).toBe("/o nas");
    // });
});
