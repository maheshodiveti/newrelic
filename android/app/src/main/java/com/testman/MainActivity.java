package com.testman;

import com.facebook.react.ReactActivity;

import com.newrelic.agent.android.NewRelic;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "TestMan";
  }

  private static final int REQUEST_ID = 1;
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    NewRelic.withApplicationToken("AAe1233cc86951ac95c59009fb19b719de923f77f8-NRMA").start(this);
  }

}

