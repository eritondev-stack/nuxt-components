import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({
  name: 'counter',
  stateFactory: true,
  namespaced: true,
})
class Counter extends VuexModule {
  private wheels = 2
  private users: any[] = []

  @Mutation
  incrWheels(n: number) {
    this.wheels += n
  }

  
  @Mutation
  incUsers(users: any[]) {
    this.users = users
  }

    
  @Mutation
  incUsersOne(users: any) {
    this.users.push(users)
  }


  get axles() {
    return this.wheels / 2
  }
}

export default Counter

