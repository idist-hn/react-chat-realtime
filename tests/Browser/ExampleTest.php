<?php

namespace Tests\Browser;

use App\User;
use Tests\DuskTestCase;
use Laravel\Dusk\Chrome;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class ExampleTest extends DuskTestCase
{
    use DatabaseMigrations;

    /**
     * A basic browser test example.
     *
     * @return void
     */
    public function testBasicExample() {
        $user1 = factory(User::class)->create([
            'name' => 'John Doe'
        ]);
        $user2 = factory(User::class)->create([
            'name' => 'Jane Doe'
        ]);
        $this->browse(function ($first, $second) use ($user1, $user2) {
            $first->loginAs($user1)
                ->visit('/home')
                ->waitFor('.message');
            $second->loginAs($user2)
                ->visit('/home')
                ->waitFor('.message')
                ->type('#message-editor', 'Hey John')
                ->press('Enter');
            $first->waitForText('Hey John')
                ->assertSee('Jane Doe');
        });
    }
}
