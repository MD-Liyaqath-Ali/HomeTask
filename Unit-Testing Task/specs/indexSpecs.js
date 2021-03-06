describe("Youtube Api Testing", function () {
  
  it("API result length is as expected", function () {
    return getResponse("Epam").then(function (result) {
      expect(result.length).toEqual(50);
    });
  });

  it("toNumPage is working as expected", () => {
    const res = toNumPage(100);
    expect(res).toEqual(10);
  });

  it("nextPage is Working as expected condition-1", () => {
    const res = nextPage(5);
    expect(res).toBe(6);
  });

  it("prevPage is working as expected condition-1", () => {
    const res = prevPage(25);
    expect(res).toBe(24);
  });

  it("prevPage is working as expected condition-2", () => {
    const res = prevPage(-1);
    expect(res).toEqual(jasmine.any(Error));
  });

  it("prevPage is working as expected condition-3", () => {
    const res = prevPage(0);
    expect(res).toEqual(jasmine.any(Error));
  });
  it("nextPage is Working as expected condition-2", () => {
    const res = nextPage(20);
    expect(res).toEqual(jasmine.any(Error));
  });

});
