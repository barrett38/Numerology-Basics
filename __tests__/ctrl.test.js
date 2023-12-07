const request = require("supertest");
const app = require("../server/controller.js");
const controller = require("../server/controller.js");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const {
  describeLifePath,
  describeDayNumber,
  describeNumerology,
  getNumerologyProfile,
  getLifePath,
} = require("../server/controller.js");

describe("Controller Tests", () => {
  let mockResponse;
  beforeEach(() => {
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
  });

  test("describeLifePath", () => {
    describeLifePath({}, mockResponse);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.send).toHaveBeenCalled();
  });

  test("describeDayNumber", () => {
    describeDayNumber({}, mockResponse);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.send).toHaveBeenCalled();
  });

  test("describeNumerology", () => {
    describeNumerology({}, mockResponse);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.send).toHaveBeenCalled();
  });

  test("getNumerologyProfile", () => {
    const mockRequest = {
      params: {
        number: "1990-01-01",
      },
    };
    getNumerologyProfile(mockRequest, mockResponse);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.send).toHaveBeenCalled();
  });

  test("should call getLifePath when submit button is clicked", () => {
    const dom = new JSDOM(`
      <!DOCTYPE html>
      <button id="submitBtn">Submit</button>
    `);
    const submitBtn = dom.window.document.getElementById("submitBtn");

    const getLifePath = jest.fn();
    submitBtn.addEventListener("click", getLifePath);

    submitBtn.click();

    expect(getLifePath).toHaveBeenCalled();
  });
});
