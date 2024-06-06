import {Logger} from "tslog";
import {UtilityService} from "../src/utility.service";

const logger = new Logger({ type: 'pretty' });

describe('UtilityService', () => {
  beforeAll(() => {
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('start server', async () => {
    // given
    const utilityService: UtilityService = new UtilityService();

    // when
    let result = utilityService.calculate(10, 20);

    // then
    expect(result).toBeDefined();
    expect(result).toEqual(200);
  });
})

