/* eslint-disable prettier/prettier */
import { Test } from '@nestjs/testing';
import { JazzService } from './jazz.service';

/**
 * @description This createMock would be something that nestjs could provide internally if we wanted to automock
 * by passing a flag or it could read jest config and figure "automock" property
 * What this would do is eventually look for constructor params and it would see that Jazz depends upon bar and foo
 * and bar and foo and instantiate the instance like it does on the application but by default auto mocking (if provided)
 * in order to avoid having to provide empty objects like this
 * Its a scalable solution when we have N constructor services, if you check Spring they provide this out of the box (https://spring.io/guides/gs/testing-web/ - As you can see they have decorator for testing and Autowire which
 * is the decorator that performs the magic but nestjs can use reflection to achieve that too)
 *
 */
function createMock<T = any>() {
  return {};
}

/**
 * This tests are just to demonstrate the request of auto mocking in nestjs, if you run tests command this will fail because
 * there is no provider for Foo and Bar therefore jazz will receive undefined instances
 * There are comments just to guide on what i'm trying to achieve with this feature request (i'm pretty sure that someone who has develop a giant application using
 * typescript/nestjs has already encountered this issue of mocking every instance just to test a single thing, that gives us a lot of trouble for no reason)
 * Resuming, if i want to test Service A (Method name "sayHello") but service A has some external dependencies and it could be 1,2,10,50,etc etc, i would not want to mock everything
 * just to test sayHello method. First you cant mock Service A because you'll lose the method logic and secondly you would end up creating each dependency instance just to test one single thing
 */
describe('JazzService', () => {
  let jazzService: JazzService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: JazzService,
          /** @description createMock is just merely an example like @golevelup/testing does */
          useValue: createMock<JazzService>(),
        },
      ],
    }).compile();

    jazzService = moduleRef.get<JazzService>(JazzService);
  });

  it('should be defined', () => {
    expect(jazzService).toBeDefined();
  });
});
