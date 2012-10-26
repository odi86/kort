<?php

namespace TestHelper\Test;

use TestHelper\KortUnitTestCase;
use TestHelper\KortCliReporter;

class TestKortCliReporter extends KortUnitTestCase
{
    public function __construct()
    {
        parent::__construct("kort - TestKortCliReporter");
    }

    public function testConstruct()
    {
        $reporter = new KortCliReporter();
        $this->assertIsA($reporter, "\\TestHelper\\KortCliReporter");
        $this->assertIsA($reporter, "\\SimpleReporter");
    }
}
