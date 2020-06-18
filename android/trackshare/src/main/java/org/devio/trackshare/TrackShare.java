package org.devio.trackshare;

import android.annotation.TargetApi;
import android.content.Context;
import android.os.Build;

import com.umeng.commonsdk.UMConfigure;
import com.umeng.socialize.PlatformConfig;

import org.devio.trackshare.util.Constants;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class TrackShare {

    public static void init(Context context) {
        PlatformConfig.setWeixin(Constants.KEY_WEIXIN,Constants.SECRET_WEIXIN);
        PlatformConfig.setSinaWeibo(Constants.KEY_WEIBO, Constants.SECRET_WEIBO,"http://sns.whalecloud.com");

        initRN("react-native", "1.0");

        UMConfigure.init(context, "5bdc4982b465f5309e000531", "official", UMConfigure.DEVICE_TYPE_PHONE, null);
        UMConfigure.setLogEnabled(BuildConfig.DEBUG);

    }

    @TargetApi(Build.VERSION_CODES.KITKAT)
    private static void initRN(String v, String t) {
        Method method = null;
        try {
            Class<?> config = Class.forName("com.umeng.commonsdk.UMConfigure");
            method = config.getDeclaredMethod("setWraperType", String.class, String.class);
            method.setAccessible(true);
            method.invoke(null, v, t);
        } catch (NoSuchMethodException | InvocationTargetException | IllegalAccessException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
