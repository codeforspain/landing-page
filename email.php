<?php

require __DIR__ . '/vendor/autoload.php';

use Frlnc\Slack\Http\SlackResponseFactory;
use Frlnc\Slack\Http\CurlInteractor;
use Frlnc\Slack\Core\Commander;

// get private vars
$dotenv = new Dotenv\Dotenv(__DIR__);
$dotenv->load();
$SLACK_TOKEN = getenv('SLACK_TOKEN');

$interactor = new CurlInteractor;
$interactor->setResponseFactory(new SlackResponseFactory);
$commander = new Commander($SLACK_TOKEN, $interactor);

// get email
$email = isset($_POST['email']) ? $_POST['email'] : null;

// send invite
$response = $commander->execute('users.admin.invite', [
    'email'      => $email,
    'set_active' => 'true'
]);

if (isset($response->error)) {
    echo "{'error': 1}";
}
else
{
    echo "{'ok': 1}";
}